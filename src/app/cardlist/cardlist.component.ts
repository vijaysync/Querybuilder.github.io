import { Component, OnInit, Input, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { CdkDragDrop, moveItemInArray, CdkDrag } from '@angular/cdk/drag-drop';
import { CardDetails, Operators, QueryData } from '../interface/queryData';
import { variables } from '../constants/common';
import { CardService } from '../service/card.service';


@Component({
  selector: 'app-cardlist',
  templateUrl: './cardlist.component.html',
  styleUrls: ['./cardlist.component.scss']
})
export class CardlistComponent implements OnInit {

  @Input() ArrayList: CardDetails[];
  @Input() operator: Operators[];
  @Input() setEnable: QueryData;
  @ViewChildren('ref') ref: QueryList<ElementRef>;

  constructor(public card: CardService) { }

  ngOnInit(): void {
  }

  submit = (e: any) => {

  }

  activeInput = (index: number, isEnable: boolean) => {
    this.ArrayList[index].hideVaribale = !isEnable;
  }

  setOpenBrace = (index: number, addIcon: boolean, removeIcon: boolean, alert: boolean, disable: boolean) => {
    this.ArrayList[index].addIcon = !addIcon;
    if (disable || this.ArrayList[index].toggleOpen) {
      if (disable && this.ArrayList[index].toggleOpen) {
        this.ArrayList[index].removeIcon = false;
      } else {
        this.ArrayList[index].removeIcon = !removeIcon;
      }
      if (disable) {
        this.card.ArrayList[index].openBrace = true;
        this.card.validation(index, alert, variables.OPEN);
      }
    }
  }

  changeEvent = (e: any, alert: boolean, index: number) => {

    if (e.invalid && e.dirty) {
      this.card.ArrayList[index].isAlert = !alert;
    } else {
      this.card.ArrayList[index].isAlert = false;
    }
  }

  closeIcon = (index: number, closeIcon: boolean, toggle: boolean) => {
    this.ArrayList[index].closeIcon = !closeIcon;
    this.ArrayList[index].toggleClose = toggle;
  }

  addIcon = (index: number, addIcon: boolean, toggle: boolean) => {
    this.ArrayList[index].addIcon = !addIcon;
    this.setEnable.setPosition = variables.DISABLE;
    this.ArrayList[index].toggleOpen = toggle;
  }

  setCloseBrace = (index: number, closeIcon: boolean, closebrace: boolean, alert: boolean, disable: boolean) => {
    this.ArrayList[index].closeIcon = !closeIcon;
    if (disable || this.ArrayList[index].toggleClose) {
      if (disable && this.ArrayList[index].toggleClose) {
        this.ArrayList[index].closeBrace = false;
      } else {
        this.ArrayList[index].closeBrace = !closebrace;
      }
      if (disable) {
        this.card.ArrayList[index].closeBrac = true;
        this.card.validation(index, alert, variables.CLOSE);
      }
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.ArrayList, event.previousIndex, event.currentIndex);
  }

  disableInput = (index: number, isEnable: boolean, ref: any) => {
    if (!ref.value) {
      this.ArrayList[index].isAlert = variables.ENABLE;
    }
    this.ArrayList[index].hideVaribale = !isEnable;
  }
}
