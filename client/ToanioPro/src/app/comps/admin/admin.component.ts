import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';
import { User } from 'src/app/models/user.model';
import { Observable } from 'rxjs';
import { Users } from '../add-list/add-list.component';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  users:User[]=[] ;
  users$: Observable<Users[]>;
  all:any

  constructor(public listSRV:ListService, public apiServ:ApiService) {
     this.getAll()
   }

  ngOnInit(): void {

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
