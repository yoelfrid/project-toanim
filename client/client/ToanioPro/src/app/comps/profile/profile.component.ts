import { Component, OnInit, Input } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { ListService } from 'src/app/services/list.service';
import { User } from 'src/app/models/user.model';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser
  user
  oneUser$:any;
  name:string;
  id:number;
  imss
  constructor(public listSRV:ListService,private route: ActivatedRoute,private router: Router,private apiSer:ApiService) { 

    this.currentUser = this.apiSer.getCurrentUser()
    
  }
  
  ngOnInit(): void {
      
     this.listSRV.getById(this.route.snapshot.params.id).subscribe(user=>{
      this.oneUser$ = user
      this.user = user
      console.log('this.user  ===',this.user);
      console.log('this.user  ==',this.user.img);
      this.imss = `http://localhost:3000/users/getFile/${this.user.img}.jpg`
      console.log(' this.oneUser$ ', this.oneUser$);
    });
  
    };
    
    editUser(id){
      this.apiSer.getId(id)
      this.router.navigate(['/EditUser'])

    }
  }



