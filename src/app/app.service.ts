import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './models/user.model';
import { Observable } from 'rxjs/observable';

@Injectable()
export class AppService {

  constructor(private http: HttpClient) { }

  getData(): Observable<User[]> {
    return this.http.get<User[]>('/assets/data.json');
  }

}