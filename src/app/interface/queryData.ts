export class QueryData {
    isEnable: boolean;
    EnableIcon: boolean;
    setPosition: boolean;
    newCondition: () => void;
    addCondition: () => void;

}

export interface CardDetails {
    addIcon: boolean;
    buttonToggle: boolean;
    closeBrace: boolean;
    inputHide: boolean;
    hideVaribale: boolean;
    removeIcon: boolean;
    closeIcon: boolean;
    input: any;
    alert: boolean;
    selected: string;
    isAlert: boolean;
    toggleOpen: boolean;
    toggleClose: boolean;
    openBrace: boolean;
    closeBrac: boolean;
}

export interface Operators {
    Query: {
        QueryName: string,
        setQuery: boolean
    };
    buttonHide: boolean;
}
