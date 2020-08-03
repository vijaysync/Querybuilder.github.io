import { Injectable } from '@angular/core';
import { CardDetails, Operators, QueryData } from '../interface/queryData';
import { variables } from '../../app/constants/common';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor() { }

  ArrayList: CardDetails[] = [{
    addIcon: variables.ENABLE,
    buttonToggle: variables.DISABLE,
    closeBrace: variables.ENABLE,
    inputHide: variables.DISABLE,
    hideVaribale: variables.ENABLE,
    removeIcon: variables.ENABLE,
    closeIcon: variables.ENABLE,
    input: '',
    alert: variables.DISABLE,
    selected: '',
    isAlert: variables.DISABLE,
    toggleOpen: variables.DISABLE,
    toggleClose: variables.DISABLE,
    openBrace: variables.DISABLE,
    closeBrac: variables.DISABLE
  }];

  operator: Operators[] = [{
    buttonHide: variables.DISABLE,
    Query: { QueryName: variables.AND, setQuery: variables.ENABLE }
  }];

  addCondition: () => void = () => {
    this.setEnable.isEnable = variables.DISABLE;
  }

  newCondition: () => void = () => {
    this.ArrayList.push({
      addIcon: variables.ENABLE,
      buttonToggle: variables.DISABLE,
      closeBrace: variables.ENABLE,
      inputHide: variables.DISABLE,
      hideVaribale: variables.ENABLE,
      removeIcon: variables.ENABLE,
      closeIcon: variables.ENABLE,
      input: '',
      alert: variables.DISABLE,
      selected: '',
      isAlert: variables.DISABLE,
      toggleOpen: variables.DISABLE,
      toggleClose: variables.DISABLE,
      openBrace: variables.DISABLE,
      closeBrac: variables.DISABLE
    });
    this.operator.push({
      buttonHide: variables.ENABLE,
      Query: { QueryName: variables.AND, setQuery: variables.ENABLE },
    });
  }

  /* tslint:disable-next-line */
  setEnable: QueryData = {
    isEnable: variables.ENABLE,
    EnableIcon: variables.DISABLE,
    setPosition: variables.ENABLE,
    newCondition: this.newCondition,
    addCondition: this.addCondition,
  };


  validation = (index: number, alert: boolean, isOpen: string) => {

    let count1 = 0;
    let count2 = 0;

    for (let i = (isOpen === variables.CLOSE) ? 0 : index;
      (isOpen === variables.CLOSE) ? i <= index : i < this.ArrayList.length; i++) {
      if (this.ArrayList[i].openBrace) {
        count1++;
      }
      if (this.ArrayList[i].closeBrac) {
        count2++;
      }
    }
    if (count2 !== count1) {
      if (isOpen === variables.OPEN && index === 0) {
        return;
      }
      this.ArrayList[index].alert = !alert;
    } else {
      this.disable();
    }
  }

  disable = () => {
    this.ArrayList.map((val, i) => {
      this.ArrayList[i].alert = variables.DISABLE;
    });
  }
}
