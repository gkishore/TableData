import { Component } from '@angular/core';
import { AppService } from './app.service';
import { User } from './models/user.model';
import { DataGridColumnDefn } from './data-grid/models/data-grid.model';
import { Observable } from "rxjs";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  columnDefn: DataGridColumnDefn[] = [
    {
      name: 'name',
      displayName: 'Name',
      width: '150px'
    },
    {
      name: 'phone',
      displayName: 'Phone',
      width: '150px'
    },
    {
      name: 'email',
      displayName: 'Email',
      width: '250px'
    },
    {
      name: 'company',
      displayName: 'Company',
      width: '250px'
    },
    {
      name: 'date_entry',
      displayName: 'Entry Date',
      width: '150px'
    },
    {
      name: 'date_exit',
      displayName: 'Date Exit',
      width: '150px'
    },
    {
      name: 'date_recent',
      displayName: 'Date Exit',
      width: '150px'
    },
    {
      name: 'date_exit',
      displayName: 'Date Exit',
      width: '150px'
    }
  ];
  rows: Observable<User[]>;

  constructor(private appService: AppService) {
    this.rows = this.appService.getData();
  }

  submitRow(row: User) {
    alert(row.id);
  }
}
