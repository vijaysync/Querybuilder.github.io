import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { CardDetails, Operators, QueryData } from '../interface/queryData';
import { TabComponent } from '../tab/tab.component';
import { CardlistComponent } from '.././cardlist/cardlist.component';

@Component({
  selector: 'app-addcard',
  templateUrl: './addcard.component.html',
  styleUrls: ['./addcard.component.scss']
})
export class AddcardComponent implements OnInit {

  @Input() ArrayList: CardDetails[];
  @Input() operator: Operators[];
  @Input() setEnable: () => void;
  @ViewChild('TabComponent') addFunction: TabComponent;
  @ViewChild(CardlistComponent, { static: false }) card: CardlistComponent;

  constructor() { }

  ngOnInit(): void {
  }

  setCondition = () => {
    this.setEnable();
  }
}
