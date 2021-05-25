import { Injectable } from '@angular/core';
import{ HttpClient, HttpHeaders }from '@angular/common/http'
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';
import { User } from '../models/user.model';

export type HttpMethod = 'GET' | 'POST' | 'DELETE' | 'PATCH';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  currentUser$: BehaviorSubject<User> = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));
  
userID : BehaviorSubject<any> = new BehaviorSubject<any>(null);
image_url 
  constructor(private http:HttpClient) {
  //                    אולי חסר פה סלש /כזה         
    this.http.get('http://localhost:3000/users').subscribe(users=>{
      console.log(users);
      
    })
  }

  request<T>(url: string, method: HttpMethod ): Observable<T> {
  console.log(url, method);
  
  
    return this.http.request<T>(method, environment.apiUrl + url );
  }


getOllUserOne(){
  console.log("getOllUserOne " , this.userID);
  
  this.userID
}


editUser(name,email,addres,about,img){

  console.log("editUser ",name,email,addres,about);
  this.userID.subscribe(val => {
    console.log(val,'======usersid');
    this.http.patch('http://localhost:3000/users/'+val, {name,email,addres,about,img}).subscribe((res:any) =>{
      console.log(res);
      return res.affected
      
    })
  })
  //  img = this.image_url


}


validateUser(email,password){
  return this.http.post('http://localhost:3000/auth', {email,password}).pipe(tap((user:any)=>{
    localStorage.setItem('currentUser', JSON.stringify(user));
 
  console.log(user,'check from validateuser ============');

    this.userID = user.id;
  }))
}

validateNewUser(name,password,email){
  console.log('post');
  console.log("name ",name,
  "password",password,
  "email",email,
  );
   this.http.post('http://localhost:3000/users', {name,password,email}).subscribe((data:any)=>{
     console.log(data,'==========data');
     this.userID = data.id;
   })
}

dataId:BehaviorSubject<any>=new BehaviorSubject(null)
getId(id:number){
  console.log("id      kk",id);
  
  let url1="http://localhost:3000/users"
return this.http.get(url1+'/'+id)
.subscribe((data)=>{
  console.log("dataaaaa  ",data);
  // this.dataLogIn=data
  this.dataId.next(data)
})
}


getById(id: any) {
  console.log('ListService id ',id);
  
  return this.request(`/users/${id}`, 'DELETE');
}


getCurrentUser(): Observable<User> {
  console.log('this.currentUser$, ',this.currentUser$);
  
  return this.currentUser$.asObservable()
}

uploadImage(image: File,id) {
  console.log("image",image); 
  let formData = new FormData()
  formData.append('image',image);
  console.log("id,",id);
  console.log("formData",formData);
  let headers = new HttpHeaders().set('id',id) 
  this.http.post(`http://localhost:3000/users/upload` ,formData,{headers}).subscribe()

  } ;  
}
