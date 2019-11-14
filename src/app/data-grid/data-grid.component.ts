import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { DataGridColumnDefn, Pagination } from './models/data-grid.model';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss']
})
export class DataGridComponent implements OnInit {
  private pagination: Pagination;
  private _rows: any[];
  private _rowsOriginal: any[];

  currentRows: any[];

  @Input()
  actionRef: TemplateRef<any>;

  @Input()
  columnDefn: DataGridColumnDefn[];

  @Input()
  set rows(value: any[]) {
    this._rows = value || [];
    this._rowsOriginal = this._rows.slice();

    this.paginate();
  }

  get rows(): any[] {
    return this._rows || [];
  }

  constructor() {
    this.pagination = {
      number: 0,
      size: 5,
      totalPages: 0,
      isFirst: true,
      isLast: false,
      options: [5, 10, 25, 50, 100]
    };
  }

  ngOnInit() {
    this.paginate();
  }

  paginate(page?: number) {
    this.pagination.number = page === undefined ? this.pagination.number : page;
    this.pagination.totalPages = Math.ceil(this._rows.length/this.pagination.size);

    const start = this.pagination.number * this.pagination.size;
    const end = start + this.pagination.size;

    this.pagination.isFirst = (this.pagination.number === 0);
    this.pagination.isLast = (this.pagination.number === (this.pagination.totalPages - 1));

    this.currentRows = (this._rows || []).slice(start, end);
  }

  first() {
    this.paginate(0);
  }
  last() {
    this.paginate(this.pagination.totalPages - 1);
  }
  next() {
    this.paginate(this.pagination.number + 1);
  }
  prev() {
    this.paginate(this.pagination.number - 1);
  }
}