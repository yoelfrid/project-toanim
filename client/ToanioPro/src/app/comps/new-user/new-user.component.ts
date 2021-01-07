import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  newRegForm:FormGroup ;

  constructor(private ApiService:ApiService,  private router: Router,
    ) { }

  ngOnInit(): void {
    console.log('ngOnInit');
    
    this.newRegForm = new FormGroup({
      name: new FormControl('',[Validators.required,Validators.minLength(2)]),
      password: new FormControl ('',[ Validators.required,Validators.minLength(3)]),
      email: new FormControl ('',[ Validators.required,Validators.email])
      
    })
  }
  navigate1(){
    this.router.navigate(['/AddList'])
  }



  onSubmit(name,password,email){
    console.log("name",name,
    "password",password,
    "email",email,
    );
   this.ApiService.validateNewUser(name,password,email)
   this.router.navigate(['/List'])

  }
}
