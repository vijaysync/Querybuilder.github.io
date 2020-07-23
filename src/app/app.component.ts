import { Component, ViewChild, ElementRef, OnInit, ViewContainerRef, TemplateRef, QueryList, ViewChildren } from '@angular/core';
import { QueryData, List, filter, ButtonList } from './interface/queryData';
//import { QueryBuilderConfig } from 'angular2-query-builder';

import { ViewEncapsulation } from '@angular/core';
import { startWith, map, switchMap, tap } from 'rxjs/operators'
import { from, merge, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    debugger;
  }

  clickCount = [];

  constructor(

    private viewContainerRef: ViewContainerRef
  ) { }

  ngOnInit(): void {
    //console.log(this.viewContainerRef.createEmbeddedView(this.temp), 'template', this.newdiv, 'newdiv', this.cont, 'container');
  }


  // submit(eve: any) {
  //   if (this.List[0].removeIcon) {
  //     this.List[0].alert = true
  //     return
  //   }
  //   this.query.resultData = [];
  //   this.query.arr1 = [];
  //   this.query.arr2 = [];
  //   this.query.filterData = [];
  //   for (let [name, value] of Object.entries(eve.form.value)) {
  //     if (value === 'or' || value === 'and') {
  //       this.query.arr1.push(value as string)
  //     }
  //     else
  //       this.query.arr2.push(value as string);
  //   }
  //   this.query.arr2.forEach((val, index) => {
  //     this.query.filterData.push([]);
  //     this.query.mockData.forEach((val1, index1) => {
  //       debugger;
  //       if (!this.List[index].selected) {
  //         this.List[index].selected = Object.keys(val1)[0]
  //       }
  //       if (new RegExp(val).test(val1[this.List[index].selected].toString())) {
  //         this.query.filterData[index][index1] = val1
  //       }
  //     })
  //   })

  //   this.query.copyData = [...this.query.filterData]

  //   this.query.arr1.filter((val, index) => {
  //     if (this.query.filterData[index + 1] !== undefined && this.query.filterData[index + 1].length === 0 && this.query.filterData[index + 1][0] === undefined && val === 'and') {
  //       this.query.copyData[index] = [];
  //     }
  //   })

  //   this.query.copyData.map(val => {
  //     if (val !== undefined) {
  //       return val
  //     }
  //   })
  //   this.query.resultData = this.query.copyData.flat();
  //   this.query.resultData = this.query.resultData.filter((val, index, self) =>
  //     index === self.findIndex((t) => (
  //       t.name === val.name && t.age === val.age
  //     ))
  //   )
  // }
  // select(e: any, index: number) {
  //   debugger;
  //   this.List[index].selected = this.keyValues[e.target.selectedIndex]
  // }
}
