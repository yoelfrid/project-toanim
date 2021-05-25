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
    this.ApiServ.currentUser$.subscribe(ifAdmin =>{
      this.ifAdmin =ifAdmin.role
      console.log("ifAdmin ",ifAdmin.role);
      
    })
  }

}
