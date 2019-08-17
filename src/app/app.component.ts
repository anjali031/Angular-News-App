import { Component, OnInit } from '@angular/core';
import {NewsService} from './services/news.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  news;
  constructor (private newsservice : NewsService){

  }
  ngOnInit (){
    this.newsservice.getNews()
      .subscribe(
        res => {
          console.log(res);
          this.news= res},
        err => console.log(err)
      )
  }
}
