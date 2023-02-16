import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Tweet } from './tweet';

@Injectable({
  providedIn: 'root'
})
export class TweetsService {
  
  private baseURL: string = 'https://7p2wytj6jg.execute-api.us-east-1.amazonaws.com/prod/';
  
  constructor(private http: HttpClient) { }

  getTweets(): Observable<any> {
    return this.http.get(this.baseURL + 'get');
  }

}
