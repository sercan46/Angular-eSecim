import { Component, OnInit } from '@angular/core';
import { AdminService } from './admin.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private adminService:AdminService) { }
  adminler:any[]=[];
  form:FormGroup
  kullaniciAdi:string;
  kullaniciSifresi:any;
  ngOnInit() {
    this.adminData();
    this.form=new FormGroup({
      userName:new FormControl(""),
      password:new FormControl("")
    })

  }
  girisYap(){
    this.kullaniciAdi=this.form.controls['userName'].value;
    this.kullaniciSifresi=this.form.controls['password'].value;
    let z= this.adminler.forEach(x=>{
        if(x.UserName==this.kullaniciAdi && x.Password==this.kullaniciSifresi){
          console.log("xx",x)
            return x;
        }
    })
  console.log("zzz",z)
   // console.log("adminler",this.adminler)
  }

  adminData(){
    this.adminService.adminService().subscribe(x=>{
     this.adminler=x
    })
  }

}
