import { Injectable } from '@angular/core';
import { Subject , Observable} from 'rxjs';
import { User } from '../models/user.model';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ListService {


  
  listUser$:Subject<string[]>= new Subject()
  listUser:string[]=[]
  users:User[] = [
    new User("יואל", "yoel@gmail.com", "100","100","05031212442"),
    new User("אלי", "eli@gmail.com", "1234","1020","0503121062"),
    new User("יורי", "Yury@gmail.com", "1234","1320","0503121062"),
    new User("משה כהן", "moshe@gmail.com", "1234","1020","0503121062"),
    new User("חיים כהן", "chaim@gmail.com", "1234","1020","0503121062"),
    new User("שלמה לוי", "eli@gmail.com", "1234","1020","0503121062"),

  ] ;

  constructor(private apiService:ApiService) { }


  all() {
    return this.apiService.request('/users', 'GET');

  }
  getById(id: any) {
    console.log('ListService id ',id);
    
    return this.apiService.request(`/users/${id}`, 'GET');
  }



 

  getUser(id:number){
    console.log(id);
    
    return this.users[id]
  }
 
  setList(text:string) {
  
    this.listUser.push(text)
    this.listUser$.next(this.listUser)
    console.log("this.listUsers ",this.listUser);
  
  }
   getList1(){

    return this.all() ;
    // console.log("this.users",this.users[0]);

  }
  getList(){

    return this.users ;
//
    
  }
  isUserExsist(user:User){
    for(let i of this.users){
      if (i.name == user.name && i.email == user.email && i.password == user.password) return true
    }
    return false
  }
  
  isUserExsist1(id:any){
    let tempUser:User
    for(let i of this.users){
      if(i.name == name){
        return tempUser = i
      }

      // tempUser = (i.name == name) ? i : undefined
      //     console.log("i ",tempUser);

      // return tempUser

    }
    console.log("i ",tempUser);
 
  }
}
