import { Observable } from 'rxjs';
import { Datause } from './../shared/datause';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LogsignService {

  baseURL1 = 'http://localhost:3000/users/';
  baseURL2  = 'http://localhost:3000/buyers/';
  s = true;
  data: Datause;
  constructor(private http: HttpClient) { }

  Userstorage(item: Datause): Observable<Datause> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<Datause>(this.baseURL1, item, httpOptions);
  }

  Buyerstorage(item: Datause): Observable<Datause> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<Datause>(this.baseURL2, item, httpOptions);
  }

  getUserdata(): Observable<Datause[]> {
    return this.http.get<Datause[]>(this.baseURL1);
  }

  getBuyerdata(): Observable<Datause[]> {
    return this.http.get<Datause[]>(this.baseURL2);
  }
}
