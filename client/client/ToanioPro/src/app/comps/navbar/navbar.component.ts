import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public ApiServ:ApiService) { }
ifAdmin
  ngOnInit(): void {
    console.log("1  1");
    this.ApiServ.currentUser$.subscribe(ifAdmin =>{
      this.ifAdmin =ifAdmin.role
      console.log("2  2");

      console.log("ifAdmin ",ifAdmin.role);
      
    })
  }

}
