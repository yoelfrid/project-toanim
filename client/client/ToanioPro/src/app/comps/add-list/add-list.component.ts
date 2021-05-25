import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { ListService } from 'src/app/services/list.service';
import { User } from 'src/app/models/user.model';
import { kMaxLength } from 'buffer';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

export interface Users {
  name: string
  // address:string
  email: string
  Password: string
  misRishyon: string
  phon: string

}
@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css']
})
export class AddListComponent implements OnInit {

  alert: string;
  alert1: string;

  newRegForm: FormGroup;
  constructor(
    private listSRV: ListService,
    private router: Router,
    private ApiService: ApiService
  ) { }


  ngOnInit(): void {
    this.newRegForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(3)]),


    })
  }

  async onSubmit() {
    var user = this.ApiService.validateUser(this.newRegForm.controls.email.value,
      await this.newRegForm.controls.password.value).subscribe((data: any) => {
        console.log('user ', user);

        if (!user) {
          alert('אינך קיים במערכת')
          console.log('לא קיים במערכת');

          return false
        }

        this.router.navigate(['/List'])
      })
    console.log(!user);
  }


  addUs() {
    this.router.navigate(['/newUser'])

  }

}
