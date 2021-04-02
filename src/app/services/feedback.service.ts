import { Injectable } from '@angular/core';
import { Feedback } from '../shared/feedback';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay, map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  baseURL = 'http://localhost:3000/feedback/';
  constructor(private http: HttpClient) { }
    submitFeedback(feedback: Feedback): Observable<Feedback> {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };
      return this.http.post<Feedback>(this.baseURL, feedback, httpOptions);
    }
    // tslint:disable-next-line:typedef
    getFeedback() {
      return this.http.get<Feedback>(this.baseURL);
    }
    putFeedback(feedback: Feedback): Observable<Feedback> {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };
      return this.http.put<Feedback>(this.baseURL + feedback, feedback, httpOptions);
    }
}
