import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  apiKey: string='d1be330ed1e5483782911a0b960466d6';
  URI:string='';
  constructor(private http: HttpClient) {
    this.URI=`https://newsapi.org/v2/top-headlines?country=us&apiKey=${this.apiKey}`;
  }
  getNews(){
    return this.http.get(`${this.URI}`);
  }
}
