 export class QueryData {
    isEnable: boolean;
    EnableIcon: boolean;
    setPosition: boolean;
    newCondition: Function;
    addCondition: Function;
    
}

export interface cardDetails {
    addIcon: boolean;
    buttonToggle: boolean;
    closeBrace: boolean;
    inputHide: boolean;
    hideVaribale: boolean;
    removeIcon: boolean;
    closeIcon: boolean;
    input: any;
    alert: boolean,
    selected: string
}

export interface filter{
    arr1: string[],
    arr2: string[],
    mockData: any[];
    filterData : string[][];
    copyData: any;
    resultData: any[];
}

export interface operators {
    Query: {
        QueryName: string,
        setQuery: boolean
    };
    buttonHide: boolean;
}

export interface counter {
    openBrace: number;
    closeBrace: number;
}
