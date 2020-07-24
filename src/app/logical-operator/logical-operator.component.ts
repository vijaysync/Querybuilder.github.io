import { Component, OnInit, Input } from '@angular/core';
import { operators } from '../interface/queryData';

@Component({
  selector: 'app-logical-operator',
  templateUrl: './logical-operator.component.html',
  styleUrls: ['./logical-operator.component.scss']
})
export class LogicalOperatorComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }

  @Input() operator: operators[];
  @Input() index: number;

  toggleQuery = (index: number, query: boolean) => {
    this.operator[index].Query.QueryName = query && 'or' || 'and';
    this.operator[index].Query.setQuery = !query;
  }

}
