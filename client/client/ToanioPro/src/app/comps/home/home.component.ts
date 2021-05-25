import { Component, OnInit } from '@angular/core';
import { NewsApiService } from 'src/app/services/news-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allNews:any

  constructor(private newsApiService:NewsApiService) { 
    this.getAllNews()
  }

  ngOnInit(): void {
  }
  cc(){
    console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
    
  }

  async getAllNews(){
    this.newsApiService.getAllNews()
    this.newsApiService.behaviorNews.subscribe(news =>
    this.allNews = news) 
    console.log("this.allNews ", this.allNews);

  }
}
