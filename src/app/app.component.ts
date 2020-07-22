import { Component, ViewChild, ElementRef, OnInit, ViewContainerRef, TemplateRef, QueryList, ViewChildren } from '@angular/core';
import { QueryData, List, filter, ButtonList } from './interface/queryData';
//import { QueryBuilderConfig } from 'angular2-query-builder';
import { CdkDragDrop, moveItemInArray, CdkDrag } from '@angular/cdk/drag-drop';
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
  addCondition: Function = () => {
    this.setEnable.isEnable = false
    console.log('hi old')
    this.keyValues = Object.keys(this.query.mockData[0])
  }

  @ViewChildren(CdkDrag) public El: QueryList<CdkDrag>

  query: filter = {
    arr1: [],
    arr2: [],
    mockData: [{ name: 'msys', status: 'good' }, { name: 'syncfusion', status: 'bad' }, { name: 'qnap', status: 'excellent' }],
    filterData: [],
    copyData: [],
    resultData: []
  }

  keyValues: string[] = [];
  onMove$: any;

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    debugger;
  }



  newCondition: Function = () => {

    this.List.push({

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
    this.button.push({
      buttonHide: true,
      Query: { QueryName: 'and', setQuery: true },
    })
  }

  toggleQuery = (index: number, query: boolean) => {

    this.button[index].Query.QueryName = query && 'or' || 'and';
    this.button[index].Query.setQuery = !query;
  }

  setEnable: QueryData = {
    isEnable: true,
    EnableIcon: false,
    setPosition: true,
    toggleQuery: this.toggleQuery,
    newCondition: this.newCondition,
    addCondition: this.addCondition,

  }

  List: List[] = [{

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

  button: ButtonList[] = [{
    buttonHide: false,
    Query: { QueryName: 'and', setQuery: true }
  }]

  activeInput = (index: number) => {
    this.List[index].hideVaribale = false;
  }

  setOpenBrace = (index: number, addIcon: boolean, removeIcon: boolean, disable: boolean) => {
    this.List[index].addIcon = !addIcon;
    if (disable) {
      this.List[index].removeIcon = !removeIcon;
      this.List[0].alert = false
    }
  }

  closeIcon = (index: number, closeIcon: boolean) => {
    this.List[index].closeIcon = !closeIcon;
  }

  clickCount = [];

  constructor(

    private viewContainerRef: ViewContainerRef
  ) { }

  ngOnInit(): void {
    //console.log(this.viewContainerRef.createEmbeddedView(this.temp), 'template', this.newdiv, 'newdiv', this.cont, 'container');
  }

  addIcon = (index: number, addIcon: boolean) => {
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
    moveItemInArray(this.List, event.currentIndex - 1, event.previousIndex);
  }


  submit(eve: any) {
    if (this.List[0].removeIcon) {
      this.List[0].alert = true
      return
    }
    this.query.resultData = [];
    this.query.arr1 = [];
    this.query.arr2 = [];
    this.query.filterData = [];
    for (let [name, value] of Object.entries(eve.form.value)) {
      if (value === 'or' || value === 'and') {
        this.query.arr1.push(value as string)
      }
      else
        this.query.arr2.push(value as string);
    }
    this.query.arr2.forEach((val, index) => {
      this.query.filterData.push([]);
      this.query.mockData.forEach((val1, index1) => {
        debugger;
        if (!this.List[index].selected) {
          this.List[index].selected = Object.keys(val1)[0]
        }
        if (new RegExp(val).test(val1[this.List[index].selected].toString())) {
          this.query.filterData[index][index1] = val1
        }
      })
    })

    this.query.copyData = [...this.query.filterData]

    this.query.arr1.filter((val, index) => {
      if (this.query.filterData[index + 1] !== undefined && this.query.filterData[index + 1].length === 0 && this.query.filterData[index + 1][0] === undefined && val === 'and') {
        this.query.copyData[index] = [];
      }
    })

    this.query.copyData.map(val => {
      if (val !== undefined) {
        return val
      }
    })
    this.query.resultData = this.query.copyData.flat();
    this.query.resultData = this.query.resultData.filter((val, index, self) =>
      index === self.findIndex((t) => (
        t.name === val.name && t.age === val.age
      ))
    )
  }
  select(e: any, index: number) {
    debugger;
    this.List[index].selected = this.keyValues[e.target.selectedIndex]
  }
}
