import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-odot',
  templateUrl: './odot.component.html',
  styleUrls: ['./odot.component.css']
})
export class OdotComponent implements OnInit {
  formdata:FormGroup

  image: File ;

  constructor() { }

  ngOnInit(): void {
  }

  
}
