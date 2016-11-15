declare namespace STSEngine.Example {
    class CommandCreatePlayerObject extends STSEngine.Command {
        private _playerId;
        constructor(attributeList?: IAttributeList, kvpList?: Iterable<[number, any]>);
        getPlayerId(): number;
        setPlayerId(id: number): void;
    }
}
declare namespace STSEngine.Example {
    class CommandCreatePlayerObjectHandler extends STSEngine.CommandHandler {
        protected worldServiceList: IWorldServiceList;
        constructor(worldServiceList: IWorldServiceList);
        protected executeCommand(command: CommandCreatePlayerObject): void;
        protected isValidCommand(command: CommandCreatePlayerObject): boolean;
        protected isValidCommandType(command: ICommand): boolean;
    }
}
declare namespace STSEngine.Example {
    class CommandDispatcher extends STSEngine.CommandDispatcher {
        constructor(worldServiceList: IWorldServiceList);
        protected initCommandHandlerList(worldServiceList: IWorldServiceList): void;
    }
}
declare namespace STSEngine.Example {
    class CommandFire extends Command {
        private _objectId;
        constructor(attributeList?: IAttributeList, kvpList?: Iterable<[number, any]>);
        getObjectId(): number;
        setObjectId(id: number): void;
    }
}
declare namespace STSEngine.Example {
    class CommandFireHandler extends STSEngine.CommandHandler {
        protected worldServiceList: IWorldServiceList;
        constructor(worldServiceList: IWorldServiceList);
        protected executeCommand(command: CommandFire): void;
        protected isValidCommand(command: CommandFire): boolean;
        protected isValidCommandType(command: ICommand): boolean;
    }
}
declare namespace STSEngine.Example {
    class CommandInitializer extends STSEngine.CommandInitializer implements ICommandInitializer {
        createByType(type: number, attr?: Iterable<[number, any]>): ICommand;
        createRegisterPlayer(attr?: Iterable<[number, any]>): CommandRegisterPlayer;
        createMoveObjectStart(attr?: Iterable<[number, any]>): CommandMoveObjectStart;
        createMoveObjectStop(attr?: Iterable<[number, any]>): CommandMoveObjectStop;
        createPlayerObject(attr?: Iterable<[number, any]>): CommandCreatePlayerObject;
        createFire(attr?: Iterable<[number, any]>): CommandFire;
        protected createAttributeList(): IAttributeList;
    }
}
declare namespace STSEngine.Example {
    class CommandMoveObjectStart extends Command {
        private _objectId;
        private _moveDirection;
        constructor(attributeList?: IAttributeList, kvpList?: Iterable<[number, any]>);
        getObjectId(): number;
        setObjectId(id: number): void;
        getMoveDirection(): MoveDirection;
        setMoveDirection(direction: MoveDirection): void;
    }
}
declare namespace STSEngine.Example {
    class CommandMoveObjectStartHandler extends STSEngine.CommandHandler {
        protected worldServiceList: IWorldServiceList;
        constructor(worldServiceList: IWorldServiceList);
        protected executeCommand(command: CommandMoveObjectStart): void;
        protected isValidCommand(command: CommandMoveObjectStart): boolean;
        protected isValidCommandType(command: ICommand): boolean;
    }
}
declare namespace STSEngine.Example {
    class CommandMoveObjectStop extends Command {
        private _objectId;
        private _moveDirection;
        constructor(attributeList?: IAttributeList, kvpList?: Iterable<[number, any]>);
        getObjectId(): number;
        setObjectId(id: number): void;
        getMoveDirection(): MoveDirection;
        setMoveDirection(direction: MoveDirection): void;
    }
}
declare namespace STSEngine.Example {
    class CommandMoveObjectStopHandler extends STSEngine.CommandHandler {
        protected worldServiceList: IWorldServiceList;
        constructor(worldServiceList: IWorldServiceList);
        protected executeCommand(command: CommandMoveObjectStop): Iterable<IProcess>;
        protected isValidCommand(command: CommandMoveObjectStop): boolean;
        protected isValidCommandType(command: ICommand): boolean;
    }
}
declare namespace STSEngine.Example {
    class CommandRegisterPlayer extends Command {
        private _playerId;
        private _playerName;
        constructor(attributeList?: IAttributeList, kvpList?: Iterable<[number, any]>);
        getPlayerId(): number;
        setPlayerId(id: number): void;
        getPlayerName(): string;
        setPlayerName(playerName: string): void;
    }
}
declare namespace STSEngine.Example {
    class CommandRegisterPlayerHandler extends STSEngine.CommandHandler {
        protected worldServiceList: IWorldServiceList;
        constructor(worldServiceList: IWorldServiceList);
        protected executeCommand(command: CommandRegisterPlayer): void;
        protected isValidCommand(command: CommandRegisterPlayer): boolean;
        protected isValidCommandType(command: ICommand): boolean;
    }
}
declare namespace STSEngine.Example {
    class Point implements IPoint {
        x: number;
        y: number;
        constructor(x: number, y: number);
    }
}
declare namespace STSEngine.Example {
    abstract class ItemRectangle extends STSEngine.Item implements IItemRectangle {
        constructor(attributeList?: IAttributeList, kvpList?: Iterable<[number, any]>);
        private _position;
        private _positionPrecise;
        private _playerId;
        private _minSpeed;
        private _maxSpeed;
        private _size;
        private _moveDirection;
        getPosition(): [number, number];
        getPosition(d: number): number;
        protected setPosition(position: [number, number]): void;
        getPositionPrecise(): [number, number];
        getPositionPrecise(d: number): number;
        setPositionPrecise(position: [number, number]): void;
        getPlayerId(): number;
        setPlayerId(playerId: number): void;
        getMinSpeed(): number;
        setMinSpeed(speed: number): void;
        getMaxSpeed(): number;
        setMaxSpeed(speed: number): void;
        getSize(): [number, number];
        getSize(d: number): number;
        setSize(size: [number, number]): void;
        getMoveDirection(): MoveDirection;
        setMoveDirection(direction: MoveDirection): void;
    }
}
declare namespace STSEngine.Example {
    class ItemBullet extends ItemRectangle {
        constructor(attributeList?: IAttributeList, kvpList?: Iterable<[number, any]>);
    }
}
declare namespace STSEngine.Example {
    class ItemPlayer extends ItemRectangle {
        constructor(attributeList?: IAttributeList, kvpList?: Iterable<[number, any]>);
    }
}
declare namespace STSEngine.Example {
    class ItemInitializer extends STSEngine.ItemInitializer implements IItemInitializer {
        constructor(createIdHandler: () => number);
        protected createByType(type: number, attr?: Iterable<[number, any]>): IItem;
        createPlayer(attr?: Iterable<[number, any]>): ItemPlayer;
        createBullet(attr?: Iterable<[number, any]>): ItemBullet;
        protected setItemId(item: IItem): void;
        protected createAttributeList(): IAttributeList;
    }
}
declare namespace STSEngine.Example {
    class ProcessCreatePlayerObject extends STSEngine.Process {
        private _playerId;
        constructor(attributeList?: IAttributeList, kvpList?: Iterable<[number, any]>);
        getPlayerId(): number;
        setPlayerId(id: number): void;
    }
}
declare namespace STSEngine.Example {
    class ProcessCreatePlayerObjectHandler extends STSEngine.ProcessHandler {
        protected worldServiceList: IWorldServiceList;
        constructor(worldServiceList: IWorldServiceList);
        initProcess(process: ProcessCreatePlayerObject): void;
    }
}
declare namespace STSEngine.Example {
    class ProcessDispatcher extends STSEngine.ProcessDispatcher {
        constructor(worldServiceList: IWorldServiceList);
        protected initProcessHandlerList(worldServiceList: IWorldServiceList): void;
    }
}
declare namespace STSEngine.Example {
    class ProcessFire extends STSEngine.Process {
        private _objectId;
        constructor(attributeList?: IAttributeList, kvpList?: Iterable<[number, any]>);
        getObjectId(): number;
        setObjectId(id: number): void;
    }
}
declare namespace STSEngine.Example {
    class ProcessFireHandler extends STSEngine.ProcessHandler {
        protected worldServiceList: IWorldServiceList;
        constructor(worldServiceList: IWorldServiceList);
        initProcess(process: ProcessFire): void;
        executeProcess(process: ProcessFire): void;
        protected fire(object: ItemPlayer): void;
        finish(process: IProcess): void;
    }
}
declare namespace STSEngine.Example {
    class ProcessInitializer extends STSEngine.ProcessInitializer implements IProcessInitializer {
        constructor(createIdHandler: () => number);
        protected createByType(type: number, attr?: Iterable<[number, any]>): IProcess;
        protected setProcessId(process: IProcess): void;
        createMove(attr?: Iterable<[number, any]>): ProcessMoveObject;
        createFire(attr?: Iterable<[number, any]>): ProcessFire;
        createCreatePlayerObject(attr?: Iterable<[number, any]>): ProcessCreatePlayerObject;
        protected createAttributeList(): IAttributeList;
    }
}
declare namespace STSEngine.Example {
    class ProcessMoveObject extends STSEngine.Process {
        private _objectId;
        private _moveDirection;
        constructor(attributeList?: IAttributeList, kvpList?: Iterable<[number, any]>);
        getObjectId(): number;
        setObjectId(id: number): void;
        getMoveDirection(): MoveDirection;
        setMoveDirection(direction: MoveDirection): void;
    }
}
declare namespace STSEngine.Example {
    class ProcessMoveObjectHandler extends STSEngine.ProcessHandler {
        protected worldServiceList: IWorldServiceList;
        constructor(worldServiceList: IWorldServiceList);
        initProcess(process: ProcessMoveObject): void;
        executeProcess(process: ProcessMoveObject): void;
        protected moveObject(object: IItemRectangle, direction: MoveDirection, execCount: number): void;
        finish(process: IProcess): void;
    }
}
declare namespace STSEngine.Example {
    class CollisionService implements ICollisionService {
        protected itemListService: IItemListService;
        protected worldAttributeList: IWorldAttributeList;
        constructor(worldAttributeList: IWorldAttributeList, itemListService: IItemListService);
        processCollision(moveItem: IItem, newPosition: [number, number]): void;
        protected processCollisionObjectPlayer(moveItem: ItemPlayer, newPosition: [number, number]): void;
        protected processCollisionObjectBullet(moveItem: ItemBullet, newPosition: [number, number]): void;
        protected processCollisionObjectPlayerObjectPlayer(moveItem: ItemPlayer, newPosition: [number, number], o: ItemPlayer): boolean;
        protected processCollisionObjectBulletObjectPlayer(moveItem: ItemBullet, newPosition: [number, number], o: ItemPlayer): boolean;
        protected processCollisionObjectRectangleWorld(moveItem: IItemRectangle, newPosition: [number, number]): boolean;
        protected isRectangleObjectCollision(pos1: [number, number], size1: [number, number], pos2: [number, number], size2: [number, number]): boolean;
    }
}
declare namespace STSEngine.Example {
    class WorldAttributeList extends STSEngine.WorldAttributeList implements IWorldAttributeList {
        constructor(attributeList?: IAttributeList, kvpList?: Iterable<[number, any]>);
        getWorldSize(): [number, number];
        setWorldSize(size: [number, number]): void;
    }
}
declare namespace STSEngine.Example {
    enum WorldAttributeType {
        WorldSize = 50,
        LastProcessId = 51,
        LastObjectId = 52,
    }
}
declare namespace STSEngine.Example {
    class WorldServiceList implements IWorldServiceList {
        protected worldAttributeList: IWorldAttributeList;
        protected itemListService: IItemListService;
        protected processListService: IProcessListService;
        protected playerListService: IPlayerListService;
        protected commandInitializer: ICommandInitializer;
        protected objectInitializer: IItemInitializer;
        protected processInitializer: IProcessInitializer;
        protected processDispatcher: IProcessDispatcher;
        protected commandDispatcher: ICommandDispatcher;
        protected collisionService: ICollisionService;
        constructor(worldAttributeList: WorldAttributeList);
        getWorldAttributeList(): IWorldAttributeList;
        getCommandInitializer(): ICommandInitializer;
        getItemInitializer(): IItemInitializer;
        getProcessInitializer(): IProcessInitializer;
        getProcessDispatcher(): IProcessDispatcher;
        getCommandDispatcher(): ICommandDispatcher;
        getItemListService(): IItemListService;
        getProcessListService(): IProcessListService;
        getCollisionService(): ICollisionService;
        getPlayerListService(): IPlayerListService;
        protected getObjectId(): number;
        protected getProcessId(): number;
    }
}
declare namespace STSEngine.Example {
    class Player extends STSEngine.Player implements IPlayer {
        protected attributeScoreId: number;
        getScore(): number;
        setScore(score: number): void;
    }
}
declare namespace STSEngine.Example {
    enum CommandType {
        CreatePlayerObject = 50,
        MoveStart = 51,
        MoveStop = 52,
        Fire = 53,
    }
}
declare namespace STSEngine.Example {
    interface ICommandInitializer extends STSEngine.ICommandInitializer {
        createRegisterPlayer(attr?: Iterable<[number, any]>): CommandRegisterPlayer;
        createMoveObjectStart(attr?: Iterable<[number, any]>): CommandMoveObjectStart;
        createMoveObjectStop(attr?: Iterable<[number, any]>): CommandMoveObjectStop;
        createFire(attr?: Iterable<[number, any]>): CommandFire;
    }
}
declare namespace STSEngine.Example {
    interface IPoint {
        x: number;
        y: number;
    }
}
declare namespace STSEngine.Example {
    enum MoveDirection {
        Unknow = 0,
        Up = 1,
        Right = 2,
        Down = 3,
        Left = 4,
    }
}
declare namespace STSEngine.Example {
    interface IItemInitializer extends STSEngine.IItemInitializer {
        createPlayer(attr?: Iterable<[number, any]>): ItemPlayer;
        createBullet(attr?: Iterable<[number, any]>): ItemBullet;
    }
}
declare namespace STSEngine.Example {
    interface IItemRectangle extends IItem {
        getPosition(): [number, number];
        getPosition(d: number): number;
        getPositionPrecise(): [number, number];
        getPositionPrecise(d: number): number;
        setPositionPrecise(position: [number, number]): any;
        getSize(): [number, number];
        getSize(d: number): number;
        setSize(size: [number, number]): any;
        getMinSpeed(): number;
        setMinSpeed(speed: number): void;
        getMaxSpeed(): number;
        setMaxSpeed(speed: number): void;
        getMoveDirection(): MoveDirection;
        setMoveDirection(direction: MoveDirection): void;
    }
}
declare namespace STSEngine.Example {
    enum ObjectType {
        Player = 0,
        Bullet = 1,
    }
}
declare namespace STSEngine.Example {
    interface IProcessInitializer extends STSEngine.IProcessInitializer {
        createMove(attr?: Iterable<[number, any]>): ProcessMoveObject;
        createFire(attr?: Iterable<[number, any]>): ProcessFire;
        createCreatePlayerObject(attr?: Iterable<[number, any]>): ProcessCreatePlayerObject;
    }
}
declare namespace STSEngine.Example {
    enum ProcessType {
        Unknown = 0,
        CreatePlayerObject = 1,
        Move = 2,
        Fire = 3,
    }
}
declare namespace STSEngine.Example {
    interface ICollisionService {
        processCollision(moveItem: IItem, newPosition: [number, number]): void;
    }
}
declare namespace STSEngine.Example {
    interface IWorld extends STSEngine.IWorld {
        getServiceList(): IWorldServiceList;
        getAttributeList(): IWorldAttributeList;
    }
}
declare namespace STSEngine.Example {
    interface IWorldAttributeList extends STSEngine.IWorldAttributeList {
        getWorldSize(): [number, number];
        setWorldSize(size: [number, number]): void;
    }
}
declare namespace STSEngine.Example {
    interface IWorldServiceList extends STSEngine.IWorldServiceList {
        getWorldAttributeList(): IWorldAttributeList;
        getCommandInitializer(): ICommandInitializer;
        getItemInitializer(): IItemInitializer;
        getProcessInitializer(): IProcessInitializer;
        getProcessDispatcher(): IProcessDispatcher;
        getCommandDispatcher(): ICommandDispatcher;
        getItemListService(): IItemListService;
        getProcessListService(): IProcessListService;
        getPlayerListService(): IPlayerListService;
        getCollisionService(): ICollisionService;
    }
}
declare namespace STSEngine.Example {
    interface IPlayer extends STSEngine.IPlayer {
        getScore(): number;
        setScore(score: number): void;
    }
}
declare namespace STSEngine.Example {
    class WebSocketGameServer extends STSEngine.WebSocketGameServer {
        protected lastPlayerId: number;
        protected connectedPlayerList: Map<string, number>;
        constructor(socket: WebSocket);
        protected getPlayerId(sid: string): number;
    }
}

declare module 'stsEngine.example/server' { export default STSEngine.Example; }