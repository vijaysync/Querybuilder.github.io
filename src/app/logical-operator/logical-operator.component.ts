import { Component, OnInit, Input } from '@angular/core';
import { Operators } from '../interface/queryData';
import {variables} from '../constants/common';

@Component({
  selector: 'app-logical-operator',
  templateUrl: './logical-operator.component.html',
  styleUrls: ['./logical-operator.component.scss']
})
export class LogicalOperatorComponent implements OnInit {
  @Input() operator: Operators[];
  @Input() index: number;

  constructor() { }

  ngOnInit(): void {
  }

  toggleQuery = (index: number, query: boolean) => {
    this.operator[index].Query.QueryName = query && variables.OR || variables.AND;
    this.operator[index].Query.setQuery = !query;
  }

}
