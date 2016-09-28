﻿namespace STSEngine {

    export interface IFilterService<T> {
        getAll(itemList: Iterable<T>, condition: (item: T) => boolean): T[];
        getFirst(itemList: Iterable<T>, condition: (item: T) => boolean): T;
    }
}