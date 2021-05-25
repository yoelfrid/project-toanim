
import { Component, PipeTransform, OnInit, Input } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { User } from 'src/app/models/user.model';
import { ListService } from 'src/app/services/list.service';
import { ProfileService } from 'src/app/services/profile.service';
import { Router } from '@angular/router';

import { BehaviorSubject } from 'rxjs';

interface Users {
  name: string;
  email: string;
  password: string;
  misRishyon: string;
  phon: string;
  // img: string;

}
@Component({
  selector: 'ListT-Toanim.Component',
  templateUrl: './list-toanim.Component.html',
  providers: [DecimalPipe]
})

export class ListToanimComponent implements OnInit {
  users:User[]=[] ;
  users$: Observable<Users[]>;
  filter = new FormControl('');
  newRegForm:FormGroup ;
  send:string

   all:any

  apiUsers$
  constructor(pipe: DecimalPipe, public listSRV:ListService,private router:Router) {
    
          //  data.auction.sort((a, b) => (b.price) - (a.price));

    this.getAll()

    }
    sendProfile(id){
      console.log("id",id);
      this.router.navigate(['profile',id])

    }

//     sendUser(f){
//       console.log("f",f.name);

// return this.listSRV.listUser$
//     }
    ngOnInit(): void {
      this.users = this.listSRV.getList()

          //  this.apiUsers$ = this.listSRV.all()
           
    }

    getAll(){
      console.log("user");
      
       this.listSRV.getList1().subscribe((data)=>
      //  data.auction.sort((a, b) => (b.price) - (a.price));
       this.all = data,
       )

    }
    
     search(text: string, pipe: PipeTransform): User[] {
      return this.users.filter(users => {
        const term = text.toLowerCase();
        return users.name.toLowerCase().includes(term)
            || pipe.transform(users.email).includes(term)
            || pipe.transform(users.password).includes(term)
            || pipe.transform(users.misRishyon).includes(term)
            || pipe.transform(users.phon).includes(term);

            
      });
    }
}





// let form  = this.newRegForm.controls ;
      // this.profilSer.push(form.name.value)




// import { Component, OnInit } from '@angular/core';
// import { ListService } from 'src/app/serve/list.service';
// import { Observable } from 'rxjs';

// @Component({
//   selector: 'app-list-toanim',
//   templateUrl: './list-toanim.component.html',
//   styleUrls: ['./list-toanim.component.css']
// })
// export class ListToanimComponent implements OnInit {

//   listUser$:Observable<string[]>


//   constructor(private sr:ListService) { }

//   ngOnInit(): void {
//     this.listUser$ =this.sr.getList()
//     console.log("this.listUser$ ",this.listUser$);
    
//   }
// }
