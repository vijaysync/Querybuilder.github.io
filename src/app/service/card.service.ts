import { Injectable } from '@angular/core';
import { CardDetails, Operators, QueryData, Counter } from '../interface/queryData';
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
    toggleOpen: variables.DISABLE
  }];

  operator: Operators[] = [{
    buttonHide: variables.DISABLE,
    Query: { QueryName: variables.AND, setQuery: variables.ENABLE }
  }];

  count: Counter = {
    openBrace: variables.DEFAULT_VALUE,
    closeBrace: variables.DEFAULT_VALUE
  };
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
      toggleOpen: variables.DISABLE
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

    if (isOpen === variables.CLOSE) {
      this.count.closeBrace++;
      if (this.count.openBrace !== this.count.closeBrace) {
        this.ArrayList[index].alert = !alert;
      }
    } else {
      this.count.openBrace++;
      if (this.count.closeBrace >= 1 && this.count.openBrace !== this.count.closeBrace) {
        this.ArrayList[index].alert = !alert;
      }
    }
    if (this.count.closeBrace === this.count.openBrace) {
      this.ArrayList.forEach((val: CardDetails) => {
        val.alert = variables.DISABLE;
      });
    }
  }
}
