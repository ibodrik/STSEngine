﻿/// <reference path="../../Entity/Impl/Entity.ts" />

namespace STSEngine {

    export class Process extends Entity implements IProcess {

        constructor(attributeList?: IAttributeList, kvpList?: Iterable<[number, any]>) {
            super(attributeList, kvpList);
            this.setProcessStatus(ProcessStatus.Init);
        }
    
        private _processStatus: number = ++this.lastAttributeId;
        private _execCount: number = ++this.lastAttributeId;

        public getProcessStatus(): ProcessStatus {
            return this.attributeList.get(this._processStatus);
        }

        public setProcessStatus(processStatus: ProcessStatus): void {
            this.attributeList.set(this._processStatus, processStatus);
        }

        public getProcessExecCount(): number {
            return this.attributeList.get(this._execCount, 0);
        }

        public setProcessExecCount(execCount: number): void {
            this.attributeList.set(this._execCount, execCount);
        }
    }
}