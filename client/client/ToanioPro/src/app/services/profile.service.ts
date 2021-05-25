import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
userlist = [{
 
}]
  // users:User[] ;
public users: BehaviorSubject<User> = new BehaviorSubject<any>(null)
// getUser(){
//   if(this.users != null){
//     return this.users
//   }
// }
  constructor() { }
}
