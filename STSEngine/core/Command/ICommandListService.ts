﻿namespace STSEngine {

    export interface ICommandListService extends IFilterable<ICommand>  {
        getCommandList(): ICommand[];
        createCommand(attributeList: IKeyValuePair[]): ICommand;
        setCommandList(commandList: IKeyValuePair[][]): void;
        clear(): void;
    }
}