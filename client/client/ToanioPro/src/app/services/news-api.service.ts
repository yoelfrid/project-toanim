import { Injectable } from '@angular/core';
import{ HttpClient, HttpHeaders }from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';
import { News1 } from '../models/news1.model';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  public behaviorNews: BehaviorSubject<News1> = new BehaviorSubject<any>(null)

  constructor( private http:HttpClient) {
   }


  validateNewNews(about,link,date){
    console.log('post');
    console.log("about ",about,
    "link",link,
    "date",date,
    );
     this.http.post('http://localhost:3000/news', {about,link,date}).subscribe((data:any)=>{
       console.log(data,'==========data');
      //  this.userID = data.id;
     })
  }

  getAllNews() {
    this.http.get('http://localhost:3000/news').subscribe(news=>{
      this.behaviorNews.next(news)
      console.log("news2 ", news);
      return news
    })
  }
  deleteById(id: any) {
    // console.log('ListService id ',id);
    
    // return this.request(`/users/${id}`, 'DELETE');

    console.log('DELETE');
    console.log("id ",id);
     this.http.delete(`http://localhost:3000/news/${id}`).subscribe((oneId:any)=>{
       console.log(oneId);
       
       return `הוסר משתמש ${id} `
     })
  }
}
