import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ListService } from 'src/app/services/list.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  formdata:FormGroup

  // image
  image: File ;

  constructor(private apiService:ApiService,private listServ:ListService) {

    this.formdata=new FormGroup({
            name:new FormControl('',[Validators.required]),
            email: new FormControl('',[Validators.required,Validators.email]),
            addres: new FormControl('',[Validators.required]),
            about:new FormControl('',[Validators.minLength(4)]),
            image:new FormControl('',[Validators.minLength(4)]),

          })
   }

  ngOnInit(): void {
    
    this.apiService.dataId.subscribe(val=>{
            console.log("val  ",val);
            if(val){
              console.log(val.name,"form");
              this.formdata.controls['name'].setValue(val.name)
              this.formdata.controls['email'].setValue(val.email)
              this.formdata.controls['addres'].setValue(val.addres)
              this.formdata.controls['about'].setValue(val.about)
              this.apiService.userID.next(val.id)
          }
          })
  }

  save(name,email,addres,about){
    const id = Math.floor(Math.random() * 100000000).toString();
   this.apiService.editUser(name,email,addres,about,id)
    
   this.apiService.uploadImage(this.image,id)

  }
  onUpload(e) {
    let image = e.files[0] ;
    let fileReader = new FileReader() ;
    fileReader.onload = e => {
      this.image = image ;
    }  
    fileReader.readAsDataURL(image) ;
    let formData = new FormData()
    formData.append('image', image );
  }
  
}



