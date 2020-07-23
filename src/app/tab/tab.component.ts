import { Component, OnInit } from '@angular/core';
import {  List, ButtonList, QueryData } from '../interface/queryData';


@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ArrayList: List[] = [{

    addIcon: true,
    buttonToggle: false,
    closeBrace: true,
    inputHide: false,
    hideVaribale: true,
    removeIcon: true,
    closeIcon: true,
    input: '',
    alert: false,
    selected: ''
  }]

  operator: ButtonList[] = [{
    buttonHide: false,
    Query: { QueryName: 'and', setQuery: true }
  }]

  addCondition: Function = () => {
    this.setEnable.isEnable = false
    console.log('hi old')
    //this.keyValues = Object.keys(this.query.mockData[0])
  }

  newCondition: Function = () => {

    this.ArrayList.push({

      addIcon: true,
      buttonToggle: false,
      closeBrace: true,
      inputHide: false,
      hideVaribale: true,
      removeIcon: true,
      closeIcon: true,
      input: '',

      alert: false,
      selected: ''
    })
    this.operator.push({
      buttonHide: true,
      Query: { QueryName: 'and', setQuery: true },
    })
  }

  // toggleQuery = (index: number, query: boolean) => {

  //   this.operator[index].Query.QueryName = query && 'or' || 'and';
  //   this.operator[index].Query.setQuery = !query;
  // }

  setEnable: QueryData = {
    isEnable: true,
    EnableIcon: false,
    setPosition: true,
    newCondition: this.newCondition,
    addCondition: this.addCondition,

  }

}
