import { Injectable } from '@angular/core';
import { cardDetails, operators, QueryData, counter } from './interface/queryData';
import { variables } from '../app/constants/common';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor() { }

  ArrayList: cardDetails[] = [{
    addIcon: variables.ENABLE,
    buttonToggle: variables.DISABLE,
    closeBrace: variables.ENABLE,
    inputHide: variables.DISABLE,
    hideVaribale: variables.ENABLE,
    removeIcon: variables.ENABLE,
    closeIcon: variables.ENABLE,
    input: variables.VARIABLE + '0',
    alert: variables.DISABLE,
    selected: ''
  }]

  operator: operators[] = [{
    buttonHide: variables.DISABLE,
    Query: { QueryName: variables.AND, setQuery: variables.ENABLE }
  }]

  addCondition: Function = () => {
    this.setEnable.isEnable = variables.DISABLE
  }

  newCondition: Function = () => {
    this.ArrayList.push({
      addIcon: variables.ENABLE,
      buttonToggle: variables.DISABLE,
      closeBrace: variables.ENABLE,
      inputHide: variables.DISABLE,
      hideVaribale: variables.ENABLE,
      removeIcon: variables.ENABLE,
      closeIcon: variables.ENABLE,
      input: `${variables.VARIABLE}${this.ArrayList.length}`,
      alert: variables.DISABLE,
      selected: ''
    })
    this.operator.push({
      buttonHide: variables.ENABLE,
      Query: { QueryName: variables.AND, setQuery: variables.ENABLE },
    })
  }

  setEnable: QueryData = {
    isEnable: variables.ENABLE,
    EnableIcon: variables.DISABLE,
    setPosition: variables.ENABLE,
    newCondition: this.newCondition,
    addCondition: this.addCondition,
  }

  count: counter = {
    openBrace: variables.DEFAULT_VALUE,
    closeBrace: variables.DEFAULT_VALUE
  }

  validation = (index: number, alert: boolean, isOpen: string) => {
    if (isOpen === variables.CLOSE) {
      this.count.closeBrace++
      if (this.count.openBrace !== this.count.closeBrace || this.count.openBrace === 0)
        this.ArrayList[index].alert = !alert;
      else if (alert) {
        this.ArrayList[index].alert = !alert
      }
    }
    else {
      this.count.openBrace++
      if (this.count.closeBrace >= 1 && this.count.openBrace !== this.count.closeBrace)
        this.ArrayList[index].alert = !alert;
      else if (alert) {
        this.ArrayList[index].alert = !alert
      }
    }
    if (this.count.closeBrace === this.count.openBrace) {
      this.ArrayList.forEach((val: cardDetails) => {
        val.alert = variables.DISABLE
      })
    }
  }
}
