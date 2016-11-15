declare namespace STSEngine {
    enum CommandType {
        Unknown = 0,
        RegisterPlayer = 1,
    }
}
declare namespace STSEngine {
    interface ICommand extends IEntity {
        getInitiatorId(): number;
        setInitiatorId(id: number): void;
    }
}
declare namespace STSEngine {
    interface ICommandDispatcher {
        execute(command: ICommand): void;
    }
}
declare namespace STSEngine {
    interface ICommandHandler {
        execute(command: ICommand): void;
        isValid(command: ICommand): boolean;
    }
}
declare namespace STSEngine {
    interface ICommandInitializer extends IEntityInitializer<ICommand> {
    }
}
declare namespace STSEngine {
    interface ICommandListService extends IFilterable<ICommand> {
        getCommandList(): ICommand[];
        add(commahd: ICommand): void;
        setCommandList(commandList: Iterable<ICommand>): void;
        getCommandKeyValuePairList(): [number, any][][];
        clear(): void;
    }
}
declare namespace STSEngine {
    interface IAttributeList extends IterableKeyValuePair, ICommitable {
        get(attribute: number, defaultValue?: any): any;
        set(attribute: number, value: any): void;
        setList(attributeList: Iterable<[number, any]>): void;
        has(attribute: number): boolean;
        delete(attribute: number): void;
    }
}
declare namespace STSEngine {
    interface IEntity extends IterableKeyValuePair {
        getType(): number;
        setType(type: number): void;
        getId(): number;
        setId(id: number): void;
        getAttributeList(): IAttributeList;
    }
}
declare namespace STSEngine {
    interface IFilterable<T> {
        getAll(condition: (item: T) => boolean): IterableIterator<T>;
        getFirst(condition: (item: T) => boolean): T;
    }
}
declare namespace STSEngine {
    interface IterableKeyValuePair extends Iterable<[number, any]> {
        getList(): [number, any][];
        getIterator(): IterableIterator<[number, any]>;
    }
}
declare namespace STSEngine {
    class BaseException {
        private message;
        constructor(message?: string);
        getMessage(): string;
    }
}
declare namespace STSEngine {
    class NotImplementedException {
    }
}
declare namespace STSEngine {
    interface IItem extends IEntity {
        getId(): number;
        setId(id: number): void;
        getType(): number;
        setType(type: number): void;
        getAttributeList(): IAttributeList;
    }
}
declare namespace STSEngine {
    interface IItemInitializer extends IEntityInitializer<IEntity> {
    }
}
declare namespace STSEngine {
    interface IItemListService extends IEntityListService<IItem> {
    }
}
declare namespace STSEngine {
    enum ItemType {
        Square = 0,
        Player = 1,
    }
}
declare namespace STSEngine {
    enum ClientServerMessageAttributeType {
        CommandList = 20,
        PlayerId = 21,
        WorldInfo = 22,
        StepNumber = 23,
        StepList = 24,
        SID = 25,
    }
}
declare namespace STSEngine {
    enum ClientServerMessageType {
        Unknown = 0,
        RequestAuthentication = 1,
        Init = 2,
        Step = 3,
        StepList = 4,
        ResponseAuthentication = 5,
        CommandList = 6,
    }
}
declare namespace STSEngine {
    interface IClientServerMessage extends IEntity {
    }
}
declare namespace STSEngine {
    interface IClientServerMessageInitializer extends IEntityInitializer<IClientServerMessage> {
    }
}
declare namespace STSEngine {
    interface IPlayer extends IEntity {
        getName(): string;
        setName(name: string): void;
    }
}
declare namespace STSEngine {
    interface IPlayerListService extends IEntityListService<IPlayer> {
    }
}
declare namespace STSEngine {
    interface IProcess extends IterableKeyValuePair {
        getId(): number;
        setId(id: number): void;
        getType(): number;
        setType(processType: number): void;
        getProcessExecCount(): number;
        setProcessExecCount(execCount: number): void;
        getProcessStatus(): ProcessStatus;
        setProcessStatus(processStatus: ProcessStatus): void;
        getAttributeList(): IAttributeList;
    }
}
declare namespace STSEngine {
    interface IProcessDispatcher {
        init(process: IProcess): void;
        execute(process: IProcess): void;
        finish(process: IProcess): void;
    }
}
declare namespace STSEngine {
    interface IProcessHandler {
        init(process: IProcess): void;
        execute(process: IProcess): void;
        finish(process: IProcess): void;
    }
}
declare namespace STSEngine {
    interface IProcessInitializer extends IEntityInitializer<IProcess> {
    }
}
declare namespace STSEngine {
    interface IProcessListService extends IFilterable<IProcess> {
        init(objectList: Iterable<Iterable<[number, any]>>): void;
        getProcessList(): IProcess[];
        add(process: IProcess): void;
        removeFinished(): void;
        getIterator(): IterableIterator<IProcess>;
    }
}
declare namespace STSEngine {
    enum ProcessStatus {
        Init = 0,
        Executing = 1,
        Finished = 2,
    }
}
declare namespace STSEngine {
    enum ProcessType {
        Unknown = 0,
    }
}
declare namespace STSEngine {
    interface ICommitable {
        commit(): void;
        rollback(): void;
        isDirty(): boolean;
    }
}
declare namespace STSEngine {
    interface IEngine {
        getWorld(): IWorld;
        step(): void;
        getCommandList(): ICommand[];
    }
}
declare namespace STSEngine {
    interface IEntityInitializer<T> {
        create(attr: Iterable<[number, any]> | number): T;
        createList(attr: Iterable<Iterable<[number, any]>>): Iterable<T>;
    }
}
declare namespace STSEngine {
    interface IEntityListService<T extends IItem> extends IFilterable<T> {
        init(objectList: Iterable<T>): void;
        get(id: number): T;
        has(id: number): boolean;
        getSize(): number;
        add(object: T): void;
        remove(id: number): void;
        clear(): void;
        getIterator(): IterableIterator<T>;
        getTyped<V extends T>(objectId: number, type: any): V;
    }
}
declare namespace STSEngine {
    interface IFilterService<T> {
        getAll(itemList: Iterable<T>, condition: (item: T) => boolean): IterableIterator<T>;
        getFirst(itemList: Iterable<T>, condition: (item: T) => boolean): T;
    }
}
declare namespace STSEngine {
    interface IGameServer {
        start(): void;
        getCommandLog(startStepNumber: number): ICommand[][];
        setOnUpdateWorld(handler: (world: IWorld, currentStepNumber: number, commandList: ICommand[]) => void): void;
    }
}
declare namespace STSEngine {
    interface IMetronome {
        start(startTime?: number): void;
        getStartTime(): number;
        pause(): void;
        resume(): void;
        getTickLength(): number;
        getTickCount(): number;
    }
}
declare namespace STSEngine {
    class ServiceAttributeType {
        static LastId: string;
    }
}
declare namespace STSEngine {
    interface IWorld {
        getServiceList(): IWorldServiceList;
        getAttributeList(): IWorldAttributeList;
    }
}
declare namespace STSEngine {
    interface IWorldAttributeList extends IterableKeyValuePair {
        getTickLength(): number;
        getLastProcessId(): number;
        setLastProcessId(id: number): any;
        getLastObjectId(): number;
        setLastObjectId(id: number): any;
        getStepNumber(): number;
        setStepNumber(stepNumber: number): void;
    }
}
declare namespace STSEngine {
    interface IWorldServiceList {
        getWorldAttributeList(): IWorldAttributeList;
        getCommandInitializer(): ICommandInitializer;
        getItemInitializer(): IItemInitializer;
        getProcessInitializer(): IProcessInitializer;
        getProcessDispatcher(): IProcessDispatcher;
        getCommandDispatcher(): ICommandDispatcher;
        getItemListService(): IItemListService;
        getProcessListService(): IProcessListService;
        getPlayerListService(): IPlayerListService;
    }
}
declare namespace STSEngine {
    class Entity implements IEntity {
        protected attributeList: IAttributeList;
        protected lastAttributeId: number;
        private _type;
        private _id;
        constructor(attributeList?: IAttributeList, kvpList?: Iterable<[number, any]>);
        getType(): number;
        setType(type: number): void;
        getId(): number;
        setId(id: number): void;
        getList(): [number, any][];
        [Symbol.iterator]: any;
        getIterator(): IterableIterator<[number, any]>;
        getAttributeList(): IAttributeList;
    }
}
declare namespace STSEngine {
    class Command extends Entity implements ICommand {
        private _initiatorId;
        getInitiatorId(): number;
        setInitiatorId(id: number): void;
    }
}
declare namespace STSEngine {
    class CommandDispatcher implements ICommandDispatcher {
        protected commandHandlerList: ICommandHandler[];
        constructor();
        execute(command: ICommand): void;
    }
}
declare namespace STSEngine {
    class CommandHandler implements ICommandHandler {
        protected worldServiceList: IWorldServiceList;
        constructor(worldServiceList: IWorldServiceList);
        execute(command: ICommand): void;
        isValid(command: ICommand): boolean;
        protected executeCommand(command: ICommand): void;
        protected isValidCommand(command: ICommand): boolean;
        protected isValidCommandType(command: ICommand): boolean;
        protected startProcess(process: IProcess): void;
        protected finishProcess(process: IProcess): void;
    }
}
declare namespace STSEngine {
    abstract class EntityInitializer<T> implements IEntityInitializer<T> {
        private createIdHandler;
        protected itemAttributeType: number;
        constructor(createIdHandler?: () => number);
        create(attr: Iterable<[number, any]> | number): T;
        protected getItemType(attr: Iterable<[number, any]>): number;
        createList(attrList: Iterable<Iterable<[number, any]>>): Iterable<T>;
        protected abstract createByType(type: number, attr?: Iterable<[number, any]>): T;
        protected createByAttr(attr: Iterable<[number, any]>): T;
        protected createId(): number;
    }
}
declare namespace STSEngine {
    abstract class CommandInitializer extends EntityInitializer<ICommand> implements ICommandInitializer {
    }
}
declare namespace STSEngine {
    class CommandListService implements ICommandListService {
        protected commandList: ICommand[];
        protected filterService: IFilterService<ICommand>;
        constructor();
        getCommandList(): ICommand[];
        add(command: ICommand): void;
        setCommandList(commandList: Iterable<ICommand>): void;
        getCommandKeyValuePairList(): [number, any][][];
        clear(): void;
        getAll(condition: (item: ICommand) => boolean): IterableIterator<ICommand>;
        getFirst(condition: (item: ICommand) => boolean): ICommand;
    }
}
declare namespace STSEngine {
    class AttributeList implements IAttributeList {
        protected attributeList: Map<number, any>;
        constructor();
        get(attribute: number, defaultValue?: any): any;
        set(attribute: number, value: any): void;
        setList(attributeList: Iterable<[number, any]>): void;
        rollback(): void;
        commit(): void;
        isDirty(): boolean;
        [Symbol.iterator]: any;
        getIterator(): IterableIterator<[number, any]>;
        has(attribute: number): boolean;
        delete(attribute: number): void;
        getList(): [number, any][];
    }
}
declare namespace STSEngine {
    class AttributeListCommitable implements IAttributeList {
        protected deletedAttributeList: Set<number>;
        protected commitedAttributeList: Map<number, any>;
        protected attributeList: Map<number, any>;
        constructor();
        get(attribute: number, defaultValue?: any): any;
        set(attribute: number, value: any): void;
        setList(attributeList: Iterable<[number, any]>): void;
        has(attribute: number): boolean;
        rollback(): void;
        commit(): void;
        isDirty(): boolean;
        delete(attribute: number): void;
        [Symbol.iterator]: any;
        getIterator(): IterableIterator<[number, any]>;
        getList(): [number, any][];
    }
}
declare namespace STSEngine {
    class Item extends Entity implements IItem {
    }
}
declare namespace STSEngine {
    abstract class ItemInitializer extends EntityInitializer<IItem> implements IItemInitializer {
    }
}
declare namespace STSEngine {
    class EntityListService<T extends IEntity> implements IEntityListService<T> {
        protected objectList: Map<number, T>;
        protected filterService: IFilterService<T>;
        constructor();
        init(objectList: Iterable<T>): void;
        get(objectId: number): T;
        getSize(): number;
        add(object: T): void;
        has(id: number): boolean;
        remove(id: number): void;
        clear(): void;
        getIterator(): IterableIterator<T>;
        getAll(condition: (item: IEntity) => boolean): IterableIterator<T>;
        getFirst(condition: (item: IEntity) => boolean): T;
        getTyped<V extends T>(objectId: number, type: any): V;
    }
}
declare namespace STSEngine {
    class ItemListService extends EntityListService<IItem> implements IItemListService {
    }
}
declare namespace STSEngine {
    abstract class ClientServerMessage extends Entity implements IClientServerMessage {
    }
}
declare namespace STSEngine {
    class ClientServerMessageCommandList extends ClientServerMessage {
        constructor(attributeList?: IAttributeList, kvpList?: Iterable<[number, any]>);
        setCommandList(commandList: [number, any][][]): void;
        getCommandList(): [number, any][][];
    }
}
declare namespace STSEngine {
    class ClientServerMessageInit extends ClientServerMessage {
        constructor(attributeList?: IAttributeList, kvpList?: Iterable<[number, any]>);
        setPlayerId(playerId: number): void;
        getPlayerId(): number;
    }
}
declare namespace STSEngine {
    class ClientServerMessageInitializer extends EntityInitializer<IClientServerMessage> implements IClientServerMessageInitializer {
        createByType(type: number, attr?: Iterable<[number, any]>): IClientServerMessage;
        createCommandList(attr?: Iterable<[number, any]>): ClientServerMessageCommandList;
        createRequestAuthentication(attr?: Iterable<[number, any]>): ClientServerMessageRequestAuthentication;
        createResponseAuthentication(attr?: Iterable<[number, any]>): ClientServerMessageResponseAuthentication;
        createStep(attr?: Iterable<[number, any]>): ClientServerMessageStep;
        createInit(attr?: Iterable<[number, any]>): ClientServerMessageInit;
        createStepList(attr?: Iterable<[number, any]>): ClientServerMessageStepList;
        protected createAttributeList(): IAttributeList;
    }
}
declare namespace STSEngine {
    class ClientServerMessageRequestAuthentication extends ClientServerMessage {
        constructor(attributeList?: IAttributeList, kvpList?: Iterable<[number, any]>);
    }
}
declare namespace STSEngine {
    class ClientServerMessageResponseAuthentication extends ClientServerMessage {
        constructor(attributeList?: IAttributeList, kvpList?: Iterable<[number, any]>);
        setSID(sid: string): void;
        getSID(): string;
    }
}
declare namespace STSEngine {
    class ClientServerMessageStep extends ClientServerMessage {
        constructor(attributeList?: IAttributeList, kvpList?: Iterable<[number, any]>);
        setCommandList(commandList: ICommand[]): void;
        getCommandList(): [number, any][][];
        getStepNumber(): number;
        setStepNumber(stepNumber: number): void;
    }
}
declare namespace STSEngine {
    class ClientServerMessageStepList extends ClientServerMessage {
        constructor(attributeList?: IAttributeList, kvpList?: Iterable<[number, any]>);
        setStepList(stepList: IEntity[]): void;
        getStepList(): [number, any][][];
    }
}
declare namespace STSEngine {
    class Process extends Entity implements IProcess {
        constructor(attributeList?: IAttributeList, kvpList?: Iterable<[number, any]>);
        private _processStatus;
        private _execCount;
        getProcessStatus(): ProcessStatus;
        setProcessStatus(processStatus: ProcessStatus): void;
        getProcessExecCount(): number;
        setProcessExecCount(execCount: number): void;
    }
}
declare namespace STSEngine {
    class ProcessDispatcher implements IProcessDispatcher {
        protected processHandlerList: IProcessHandler[];
        execute(process: IProcess): void;
        init(process: IProcess): void;
        finish(process: IProcess): void;
        protected getProcessHandler(process: IProcess): IProcessHandler;
    }
}
declare namespace STSEngine {
    class ProcessHandler implements IProcessHandler {
        protected worldServiceList: IWorldServiceList;
        constructor(worldServiceList: IWorldServiceList);
        init(process: IProcess): void;
        execute(process: IProcess): void;
        finish(process: IProcess): void;
        protected initProcess(process: IProcess): void;
        protected executeProcess(process: IProcess): void;
        protected finishProcess(process: IProcess): void;
        protected isValidProcessType(command: IProcess): boolean;
        protected startProcess(process: IProcess): void;
    }
}
declare namespace STSEngine {
    abstract class ProcessInitializer extends EntityInitializer<IProcess> implements IProcessInitializer {
    }
}
declare namespace STSEngine {
    class ProcessListService implements IProcessListService {
        protected processList: IProcess[];
        protected filterService: IFilterService<IProcess>;
        constructor();
        init(processList: Iterable<IProcess>): void;
        getProcessList(): IProcess[];
        add(process: IProcess): void;
        removeFinished(): void;
        getIterator(): IterableIterator<IProcess>;
        getAll(condition: (item: IProcess) => boolean): IterableIterator<IProcess>;
        getFirst(condition: (item: IProcess) => boolean): IProcess;
    }
}
declare namespace STSEngine {
    class ProcessListServiceCommitable implements IProcessListService, ICommitable {
        protected processList: IProcess[];
        protected filterService: IFilterService<IProcess>;
        protected firstUncommitedIndex: number;
        constructor();
        getProcessList(): IProcess[];
        add(process: IProcess): void;
        init(processList: Iterable<IProcess>): void;
        removeFinished(): void;
        getIterator(): IterableIterator<IProcess>;
        commit(): void;
        rollback(): void;
        isDirty(): boolean;
        getAll(condition: (item: IProcess) => boolean): IterableIterator<IProcess>;
        getFirst(condition: (item: IProcess) => boolean): IProcess;
    }
}
declare namespace STSEngine {
    class Player extends Entity implements IPlayer {
        protected attributeList: IAttributeList;
        protected attributeNameId: number;
        constructor(attributeList?: IAttributeList, kvpList?: Iterable<[number, any]>);
        getName(): string;
        setName(name: string): void;
    }
}
declare namespace STSEngine {
    class PlayerListService extends EntityListService<IPlayer> implements IPlayerListService {
    }
}
declare namespace STSEngine {
    class Engine implements IEngine {
        protected world: IWorld;
        protected processListService: IProcessListService;
        protected processDispatcher: IProcessDispatcher;
        protected commandDispatcher: ICommandDispatcher;
        protected commandListService: ICommandListService;
        constructor(world: IWorld, commandListService: ICommandListService);
        getWorld(): IWorld;
        step(): void;
        protected increaseStepNumber(): void;
        getCommandList(): ICommand[];
        protected processCommandList(): void;
    }
}
declare namespace STSEngine {
    class EntityListServiceCommitable<T extends IEntity> implements IEntityListService<T>, ICommitable {
        protected objectListService: IEntityListService<T>;
        protected deletedObjectIdList: Set<number>;
        protected newObjectIdList: Set<number>;
        protected filterService: IFilterService<T>;
        constructor();
        init(objectList: Iterable<T>): void;
        get(id: number): T;
        has(id: number): boolean;
        getSize(): number;
        add(object: T): void;
        protected isObjectNotDeleted(object: T): boolean;
        getIterator(): IterableIterator<T>;
        remove(id: number): void;
        clear(): void;
        commit(): void;
        rollback(): void;
        isDirty(): boolean;
        getAll(condition: (item: T) => boolean): IterableIterator<T>;
        getFirst(condition: (item: T) => boolean): T;
        getTyped<V extends T>(objectId: number, type: any): V;
    }
}
declare namespace STSEngine {
    class FilterService<T> implements IFilterService<T> {
        getAll(itemList: Iterable<T>, condition: (item: T) => boolean): IterableIterator<T>;
        getFirst(itemList: Iterable<T>, condition: (item: T) => boolean): T;
    }
}
declare namespace STSEngine {
    class GameServer implements IGameServer {
        protected emptyCommandList: ICommand[];
        protected engine: IEngine;
        protected metronome: IMetronome;
        protected commandLog: ICommand[][];
        protected timerId: any;
        protected onUpdateWorld: (world: IWorld, currentStepNumber: number, commandList: ICommand[]) => void;
        constructor(engine: IEngine);
        start(): void;
        getCommandLog(startStepNumber: number): ICommand[][];
        protected updateWorld(): void;
        protected getStepNumber(): number;
        setOnUpdateWorld(handler: (world: IWorld, currentStepNumber: number, commandList: ICommand[]) => void): void;
    }
}
declare namespace STSEngine {
    class Metronome implements IMetronome {
        protected tickLength: number;
        protected startTime: number;
        protected pauseStart: number;
        protected pauseLength: number;
        protected isPaused: boolean;
        constructor(tickLength: number);
        start(startTime?: number): void;
        getStartTime(): number;
        pause(): void;
        resume(): void;
        getTickLength(): number;
        getTickCount(): number;
    }
}
declare namespace STSEngine {
    class World implements IWorld {
        protected worldServiceList: IWorldServiceList;
        protected attributeList: IWorldAttributeList;
        constructor(worldSettings: IWorldServiceList);
        getServiceList(): IWorldServiceList;
        getAttributeList(): IWorldAttributeList;
    }
}
declare namespace STSEngine {
    class WorldAttributeList implements IWorldAttributeList {
        protected attributeList: IAttributeList;
        constructor(attributeList?: IAttributeList, kvpList?: Iterable<[number, any]>);
        getTickLength(): number;
        getList(): [number, any][];
        [Symbol.iterator]: any;
        getIterator(): IterableIterator<[number, any]>;
        getAttributeList(): IAttributeList;
        getLastProcessId(): number;
        setLastProcessId(id: number): void;
        getLastObjectId(): number;
        setLastObjectId(id: number): void;
        getStepNumber(): number;
        setStepNumber(stepNumber: number): void;
    }
}
declare namespace STSEngine {
    enum WorldAttributeType {
        Unknown = 0,
        TickLength = 1,
        LastProcessId = 2,
        LastObjectId = 3,
        StepNumber = 4,
    }
}
declare namespace STSEngine {
    abstract class WorldServiceList implements IWorldServiceList {
        protected worldAttributeList: IWorldAttributeList;
        protected itemListService: IItemListService;
        protected processListService: IProcessListService;
        protected playerListService: IPlayerListService;
        protected commandInitializer: ICommandInitializer;
        protected itemInitializer: IItemInitializer;
        protected processInitializer: IProcessInitializer;
        protected processDispatcher: IProcessDispatcher;
        protected commandDispatcher: ICommandDispatcher;
        getWorldAttributeList(): IWorldAttributeList;
        getCommandInitializer(): ICommandInitializer;
        getItemInitializer(): IItemInitializer;
        getProcessInitializer(): IProcessInitializer;
        getProcessDispatcher(): IProcessDispatcher;
        getCommandDispatcher(): ICommandDispatcher;
        getItemListService(): IItemListService;
        getProcessListService(): IProcessListService;
        getPlayerListService(): IPlayerListService;
        protected getObjectId(): number;
        protected getProcessId(): number;
    }
}
declare namespace STSEngine {
    interface IWebSocketGameClient {
        getWorld(): IWorld;
        getPlayerId(): number;
        setOnConnected(handler: (webSocketClient: IWebSocketGameClient) => void): void;
    }
}
declare namespace STSEngine {
    interface IPlayerAction {
        setOnAction(handler: () => void): any;
        getCommandKeyValuePairList(): [number, any][][];
        clear(): void;
    }
}
declare namespace STSEngine {
    interface IView {
        start(): void;
        stop(): void;
    }
}
declare namespace STSEngine {
    class WebSocketGameClient implements IWebSocketGameClient {
        protected commandListService: ICommandListService;
        protected socket: WebSocket;
        protected sid: string;
        protected engine: IEngine;
        protected playerAction: IPlayerAction;
        protected playerId: number;
        protected clientSeverMessageInitializer: IClientServerMessageInitializer;
        protected onConnectedHandler: (webSocketClient: IWebSocketGameClient) => void;
        protected worldServiceList: IWorldServiceList;
        constructor(socket: WebSocket, sid: string, playerAction: IPlayerAction, worldServiceList: IWorldServiceList, clientSeverMessageInitializer: IClientServerMessageInitializer);
        getPlayerId(): number;
        setOnConnected(handler: (webSocketClient: IWebSocketGameClient) => void): void;
        protected commandInitializator(attr: Iterable<[number, any]>): ICommand;
        protected init(): void;
        protected createWorld(): IWorld;
        getWorld(): IWorld;
        protected onPlayerAction(playerAction: IPlayerAction): void;
        protected onOpen(ev: Event): void;
        protected onMessage(ev: MessageEvent): void;
        protected processServerMessage(attr: Iterable<[number, any]>): void;
        protected sendAuthentication(): void;
        protected processStep(message: ClientServerMessageStep): void;
        protected processStepList(message: ClientServerMessageStepList): void;
        protected processInit(message: ClientServerMessageInit): void;
        protected onClose(ev: CloseEvent): void;
        protected onError(ev: Event): void;
        protected sendMessage(message: IClientServerMessage): void;
    }
}
declare namespace STSEngine {
    class PlayerAction implements IPlayerAction {
        protected commandListService: ICommandListService;
        protected onActionHandler: (playerAction: IPlayerAction) => void;
        constructor();
        getCommandKeyValuePairList(): [number, any][][];
        clear(): void;
        setOnAction(handler: (playerAction: IPlayerAction) => void): void;
        protected onAction(): void;
    }
}
declare namespace STSEngine {
    abstract class View {
        protected rootElement: HTMLDivElement;
        protected worldAttributeList: IWorldAttributeList;
        protected itemListService: IItemListService;
        protected processListService: IProcessListService;
        protected isStarted: boolean;
        protected world: IWorld;
        protected playerId: number;
        constructor(rootElement: HTMLDivElement, world: IWorld);
        setPlayerId(playerId: number): void;
        protected clearHtmlElement(element: HTMLElement): void;
        protected draw(): void;
        protected abstract refresh(): void;
        start(): void;
        stop(): void;
    }
}
