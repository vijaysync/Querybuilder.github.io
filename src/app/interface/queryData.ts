 export class QueryData {
    isEnable: boolean;
    EnableIcon: boolean;
    setPosition: boolean;
    //toggleQuery: Function;
    newCondition: Function;
    addCondition: Function;
    
}

export interface List {
    
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

export interface ButtonList {
    Query: {
        QueryName: string,
        setQuery: boolean
    };
    buttonHide: boolean;
}
