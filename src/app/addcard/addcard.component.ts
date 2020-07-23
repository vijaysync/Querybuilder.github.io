import { Component, OnInit, Input, ViewChild } from '@angular/core';
import {  List, ButtonList, QueryData } from '../interface/queryData';
import { TabComponent  } from '../tab/tab.component';

@Component({
  selector: 'app-addcard',
  templateUrl: './addcard.component.html',
  styleUrls: ['./addcard.component.scss']
})
export class AddcardComponent implements OnInit {

  @Input('ArrayList') ArrayList: List[];
  @Input('operator') operator: ButtonList[];
  @Input('setEnable') setEnable: Function;
  @ViewChild('TabComponent') addFunction: TabComponent;

  constructor() { }

  ngOnInit(): void {
  }

  setCondition = ()=> {
    this.setEnable()
  }

  

}
