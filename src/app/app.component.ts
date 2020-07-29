import { Component, ViewChild, ElementRef, OnInit, ViewContainerRef, TemplateRef, QueryList, ViewChildren } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  clickCount = [];
  constructor(
    private viewContainerRef: ViewContainerRef
  ) { }

  ngOnInit(): void {
  }
}
