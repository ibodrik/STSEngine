﻿namespace STSEngine {

    export abstract class WorldServiceList implements IWorldServiceList {
        protected worldAttributeList: IWorldAttributeList;
        protected itemListService: IItemListService;
        protected processListService: IProcessListService;
        protected playerListService: IPlayerListService;

        protected commandInitializer: ICommandInitializer;
        protected itemInitializer: IItemInitializer;
        protected processInitializer: IProcessInitializer;
        protected processDispatcher: IProcessDispatcher;
        protected commandDispatcher: ICommandDispatcher;

        public getWorldAttributeList(): IWorldAttributeList {
            return this.worldAttributeList;
        }

        public getCommandInitializer(): ICommandInitializer {
            return this.commandInitializer;
        }

        public getItemInitializer(): IItemInitializer {
            return this.itemInitializer;
        }

        public getProcessInitializer(): IProcessInitializer {
            return this.processInitializer;
        }

        public getProcessDispatcher(): IProcessDispatcher {
            return this.processDispatcher;
        }

        public getCommandDispatcher(): ICommandDispatcher {
            return this.commandDispatcher;
        }

        public getItemListService(): IItemListService {
            return this.itemListService;
        }

        public getProcessListService(): IProcessListService {
            return this.processListService;
        }

        public getPlayerListService(): IPlayerListService {
            return this.playerListService;
        }

        protected getObjectId(): number {
            var id = this.worldAttributeList.getLastObjectId() + 1;
            this.worldAttributeList.setLastObjectId(id);
            return id;
        }

        protected getProcessId(): number {
            var id = this.worldAttributeList.getLastProcessId() + 1;
            this.worldAttributeList.setLastProcessId(id);
            return id;
        }
    }
}