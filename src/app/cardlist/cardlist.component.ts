import { Component, OnInit, Input } from '@angular/core';
import { CdkDragDrop, moveItemInArray, CdkDrag } from '@angular/cdk/drag-drop';
import {  List, ButtonList, QueryData } from '../interface/queryData';


@Component({
  selector: 'app-cardlist',
  templateUrl: './cardlist.component.html',
  styleUrls: ['./cardlist.component.scss']
})
export class CardlistComponent implements OnInit {

   @Input('ArrayList') List: List[];
   @Input('operator') operator: ButtonList[];
   @Input('setEnable') setEnable: QueryData;

  constructor() { }

  ngOnInit(): void {
  }

    toggleQuery = (index: number, query: boolean) => {

    this.operator[index].Query.QueryName = query && 'or' || 'and';
    this.operator[index].Query.setQuery = !query;
  }

  submit = (e: any)=>{
    
  }


  activeInput = (index: number) => {
    this.List[index].hideVaribale = false;
  }

  setOpenBrace = (index: number, addIcon: boolean, removeIcon: boolean, disable: boolean) => {
    debugger;
    this.List[index].addIcon = !addIcon;
    if (disable) {
      this.List[index].removeIcon = !removeIcon;
      this.List[0].alert = false
    }
  }

  closeIcon = (index: number, closeIcon: boolean) => {
    this.List[index].closeIcon = !closeIcon;
  }

  addIcon = (index: number, addIcon: boolean) => {
    debugger;
    this.List[index].addIcon = !addIcon;
    this.setEnable.setPosition = false;
  }

  setCloseBrace = (index: number, closeIcon: boolean, closebrace: boolean, diasble: boolean) => {
    this.List[index].closeIcon = !closeIcon;
    if (diasble)
      this.List[index].closeBrace = !closebrace;

  }
  drop(event: CdkDragDrop<string[]>) {
    debugger;
    moveItemInArray(this.List, event.previousIndex, event.currentIndex);
    //moveItemInArray(this.List, event.currentIndex - 1, event.previousIndex);
  }


  

}
