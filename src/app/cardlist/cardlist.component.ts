import { Component, OnInit, Input } from '@angular/core';
import { CdkDragDrop, moveItemInArray, CdkDrag } from '@angular/cdk/drag-drop';
import { cardDetails, operators, QueryData } from '../interface/queryData';
import { variables } from '../constants/common';
import { CardService } from '../card.service';


@Component({
  selector: 'app-cardlist',
  templateUrl: './cardlist.component.html',
  styleUrls: ['./cardlist.component.scss']
})
export class CardlistComponent implements OnInit {

  @Input('ArrayList') List: cardDetails[];
  @Input('operator') operator: operators[];
  @Input('setEnable') setEnable: QueryData;

  constructor(public card: CardService) { }



  ngOnInit(): void {
  }

  submit = (e: any) => {

  }


  activeInput = (index: number, isEnable: boolean) => {
    this.List[index].hideVaribale = !isEnable;
  }

  setOpenBrace = (index: number, addIcon: boolean, removeIcon: boolean, alert: boolean, disable: boolean) => {
    debugger;
    this.List[index].addIcon = !addIcon;
    if (disable) {
      this.List[index].removeIcon = !removeIcon;
      this.card.validation(index, alert, variables.OPEN)
    }

  }

  closeIcon = (index: number, closeIcon: boolean) => {
    this.List[index].closeIcon = !closeIcon;
  }

  addIcon = (index: number, addIcon: boolean) => {
    debugger;
    this.List[index].addIcon = !addIcon;
    this.setEnable.setPosition = variables.DISABLE;
  }

  setCloseBrace = (index: number, closeIcon: boolean, closebrace: boolean, alert: boolean, diasble: boolean) => {
    this.List[index].closeIcon = !closeIcon;
    if (diasble) {
      this.List[index].closeBrace = !closebrace;
      this.card.validation(index, alert, variables.CLOSE)
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    debugger;
    moveItemInArray(this.List, event.previousIndex, event.currentIndex);
    //moveItemInArray(this.List, event.currentIndex - 1, event.previousIndex);
  }

  disableInput = (index: number, isEnable: boolean) => {
    this.List[index].hideVaribale = !isEnable;
  }




}
