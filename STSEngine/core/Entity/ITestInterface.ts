﻿namespace STSEngine {

    export interface ITestInterface {
        getAttribute(attribute: string, defaultValue?: any): any;
        setAttribute(attribute: string, value: any): void;
        //setAttributeList(attributeList: Map<string, any> | IKeyValuePair[]): void;
        hasAttribute(attribute: string): boolean;
        removeAttribute(attribute: string): void;
        getKeyValuePairList(): IKeyValuePair[];
    }
}