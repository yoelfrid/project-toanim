import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';
import { User } from 'src/app/models/user.model';
import { Observable } from 'rxjs';
import { Users } from '../add-list/add-list.component';
import { ApiService } from 'src/app/services/api.service';
import { FormGroup, FormControl } from '@angular/forms';
import { NewsApiService } from 'src/app/services/news-api.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  users:User[]=[] ;
  users$: Observable<Users[]>;
  all:any
  allNews:any

  newRegForm: FormGroup;
  constructor(private newsApiService:NewsApiService ,public listSRV:ListService, public apiServ:ApiService) {
     this.getAll()
     this.getAllNews()
   }

    ngOnInit(): void {
         this.newRegForm = new FormGroup({
      about: new FormControl(''),
      link: new FormControl(''),
      date: new FormControl('')
    })
  }

  onSubmit(about,link,date){
console.log("aaaaaaa ",about.value, link.value ,date.value);
// console.log("aaaaaaa ", data)
this.newsApiService.validateNewNews(about.value, link.value ,date.value)

  }


  async getAllNews(){
    this.newsApiService.getAllNews()
    this.newsApiService.behaviorNews.subscribe(news =>
    this.allNews = news) 
    console.log("this.allNews ", this.allNews);

  }
  deletOneNews(id){
    // this.apiServ.getById(id).subscribe(res=>{
    //   console.log(res);
    // })
       this.newsApiService.deleteById(id)
      //  .subscribe(res=>{
      // console.log(res),
      return `הוסר משתמש ${id} `
// )
    // }
  }

  
  getAll(){
    console.log("user");
    
     this.listSRV.getList1().subscribe((data)=>
     this.all = data)
    //  console.log(data))

  }

  deletD(id){
    console.log("deletD(id)");
    if(confirm('? האם אתה בטוח שברצונך למחוק')){ 
      this.apiServ.getById(id).subscribe(res=>{
    console.log(res);
  

  })
  }

  }




  updet(id){

  }



}
