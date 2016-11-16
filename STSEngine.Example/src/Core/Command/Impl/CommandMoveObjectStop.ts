﻿/// <reference path="Command.ts" />

namespace STSEngine.Example {

    export class CommandMoveObjectStop extends Command {

        private _objectId: number = ++this.lastAttributeId;
        private _moveDirection: number = ++this.lastAttributeId;

        constructor(attributeList?: IAttributeList, kvpList?: Iterable<[number, any]>) {
            super(attributeList, kvpList);

            this.setType(CommandMoveObjectStop.Type);
        }

        public getObjectId(): number {
            return this.attributeList.get(this._objectId);
        }

        public setObjectId(id: number): void {
            this.attributeList.set(this._objectId, id);
        }

        public getMoveDirection(): MoveDirection {
            return this.attributeList.get(this._moveDirection);
        }

        public setMoveDirection(direction: MoveDirection): void {
            this.attributeList.set(this._moveDirection, direction);
        }
    }

    export module CommandMoveObjectStop {
        export const Type = ++Command.LastTypeId;
    }
}