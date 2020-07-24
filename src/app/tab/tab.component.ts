import { Component, OnInit } from '@angular/core';
import { CardService } from '../card.service'



@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
})
export class TabComponent implements OnInit {

  constructor(public card: CardService) { }

  ngOnInit(): void {
  }

}
