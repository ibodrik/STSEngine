﻿namespace STSEngine {

    export class WebSocketGameClient implements IWebSocketGameClient {

        protected commandListService: ICommandListService;
        protected socket: WebSocket;
        protected sid: string;
        protected engine: IEngine;
        protected playerAction: IPlayerAction;
        protected playerId: number;
        protected clientSeverMessageInitializer: IClientServerMessageInitializer;

        protected onConnectedHandler: (webSocketClient: IWebSocketGameClient) => void;

        protected worldServiceList: IWorldServiceList;

        constructor(socket: WebSocket, sid: string, playerAction: IPlayerAction, worldServiceList: IWorldServiceList, clientSeverMessageInitializer: IClientServerMessageInitializer) {
            this.clientSeverMessageInitializer = clientSeverMessageInitializer;
            this.worldServiceList = worldServiceList;
            this.commandListService = new CommandListService();
            this.socket = socket;
            this.playerAction = playerAction;
            this.sid = sid;
            this.playerAction.setOnAction(this.onPlayerAction.bind(this));
            this.init();
        }

        public getPlayerId(): number {
            return this.playerId
        }

        public setOnConnected(handler: (webSocketClient: IWebSocketGameClient) => void): void {
            this.onConnectedHandler = handler;
        }


        protected commandInitializator(attr: Iterable<[number, any]>): ICommand {
            return new Command(new AttributeList(), attr);
        }

        protected init() {
            let world = this.createWorld();
            this.engine = new Engine(world, this.commandListService);

            this.socket.onopen = this.onOpen.bind(this);
            this.socket.onmessage = this.onMessage.bind(this);
            this.socket.onclose = this.onClose.bind(this);
            this.socket.onerror = this.onError.bind(this);
        }

        protected createWorld(): IWorld {
            return new World(this.worldServiceList);
        }


        public getWorld(): IWorld {
            return this.engine.getWorld();
        }

        protected onPlayerAction(playerAction: IPlayerAction) {
            let commandList = playerAction.getCommandKeyValuePairList();
            playerAction.clear();
            var message = new ClientServerMessageCommandList();
            message.setCommandList(commandList);
            this.sendMessage(message);
        }

        protected onOpen(ev:Event): void {
        }

        protected onMessage(ev: MessageEvent): void {
            let message = JSON.parse(ev.data);
            this.processServerMessage(message);
        }

        protected processServerMessage(attr: Iterable<[number, any]>): void {
            let message = this.clientSeverMessageInitializer.create(attr);

            switch (message.getType()) {
                case ClientServerMessageType.RequestAuthentication:
                    this.sendAuthentication();
                    break;
                case ClientServerMessageType.Init:
                    this.processInit(<ClientServerMessageInit>message);
                    break;
                case ClientServerMessageType.Step:
                    this.processStep(<ClientServerMessageStep>message);
                    break;
                case ClientServerMessageType.StepList:
                    this.processStepList(<ClientServerMessageStepList>message);
                    break;
            }
        }

        protected sendAuthentication() {
            let message = new ClientServerMessageResponseAuthentication();
            message.setSID(this.sid);
            this.sendMessage(message);
        }

        protected processStep(message: ClientServerMessageStep) {
            let commandListAttr = message.getCommandList();
            let commandList = this.worldServiceList.getCommandInitializer().createList(commandListAttr);
            this.commandListService.setCommandList(commandList);
            this.engine.step();
        }

        protected processStepList(message: ClientServerMessageStepList) {
            var stepListAttr = message.getStepList();
            var stepList = this.clientSeverMessageInitializer.createList(stepListAttr);
            for (var step of stepList) {
                this.processStep(<ClientServerMessageStep>step);
            }
        }

        protected processInit(message: ClientServerMessageInit) {
            this.playerId = message.getPlayerId();
            if (this.onConnectedHandler) {
                this.onConnectedHandler(this);
            }
        }

        protected onClose(ev: CloseEvent): void {
            
        }

        protected onError(ev: Event): void {

        }

        protected sendMessage(message: IClientServerMessage) {
            this.socket.send(JSON.stringify(message.getList()));            
        }

    }
}