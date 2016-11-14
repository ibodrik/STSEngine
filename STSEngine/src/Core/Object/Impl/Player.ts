﻿namespace STSEngine {

    export class Player extends ObjectImpl implements IPlayer {

        protected attributeList: IAttributeList;

        constructor(attributeList?: IAttributeList, kvpList?: Iterable<[number, any]>) {
            super(attributeList, kvpList);
            this.setType(ObjectType.Player);
        }

        public getName(): string {
            return this.attributeList.get(ObjectAttributeType.Name);
        }

        public setName(name: string): void {
            this.attributeList.set(ObjectAttributeType.Name, name);
        }
    }
}