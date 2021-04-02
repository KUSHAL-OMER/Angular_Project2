import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../shared/todo';

@Injectable({
  providedIn: 'root'
})
export class WorkServiceService {


  baseURL = 'http://localhost:3000/todoes/';

  constructor( private http: HttpClient ) {}

  getItems() {
    return this.http.get<Todo[]>(this.baseURL);
  }

  putstoryItem(item: Todo) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.put<Todo>(this.baseURL + "0", item, httpOptions);
  }

  putpoemItem(item: Todo) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.put<Todo>(this.baseURL + "1", item, httpOptions);
  }

  putcompoItem(item: Todo) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.put<Todo>(this.baseURL + "2", item, httpOptions);
  }

}
