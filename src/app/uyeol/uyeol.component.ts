import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UyeOlService } from './uyeol.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-uyeol',
  templateUrl: './uyeol.component.html',
  styleUrls: ['./uyeol.component.css']
})
export class UyeolComponent implements OnInit {

  constructor(private uyeOlService:UyeOlService,private toastr:ToastrService,private router:Router) { }
  form:FormGroup
  ngOnInit() {
    this.form=new FormGroup({
      TC:new FormControl("", Validators.required),
      Ad:new FormControl("",Validators.required),
      Soyad:new FormControl("",Validators.required),
      Dogum_Tarihi:new FormControl("",Validators.required),
      Password:new FormControl("",Validators.required)
    })
  }
  uyeol(){
    console.log("this form",this.form.value)
    let params={
      Ad:this.form.value.Ad,
      Soyad:this.form.value.Soyad,
      TC:this.form.value.TC,
      Password:this.form.value.Password,
      Dogum_Tarihi:moment(this.form.value.Dogum_Tarihi).format()

    }
    console.log("paramss",params)
    this.uyeOlService.postUyelik(params).subscribe(x=>{
      this.toastr.success("Üyeliğiniz Başarıyla Oluşturuldu Sisteme Giriş Yapabilirsiniz")
      this.router.navigate(['home'])

    })

  }
  girisYap(){
      this.router.navigate(['girisyap'])
  }

}
