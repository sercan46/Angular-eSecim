import { Component, OnInit } from '@angular/core';
import { SecimService } from './secim.service';
import { MatDialogService } from '../mat-confirm-dialog/mat-confirm-dialog.service';
import { ToastrService } from 'ngx-toastr';
import * as moment from 'moment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-secim',
  templateUrl: './secim.component.html',
  styleUrls: ['./secim.component.css']
})
export class SecimComponent implements OnInit {

  constructor(private secimService:SecimService,private dialogService:MatDialogService,private toastr: ToastrService,private router:Router) { }
  partis:any[]=[]
  girisYapanName:any;
  girisYapanSoyad:any;
  girisYapanTc:any;
  girisYapanId:any;
  secilenParti:any;
  intCeviri:any;
  ngOnInit() {
    this.girisYapanTc=localStorage.getItem('TC')
    this.girisYapanName=localStorage.getItem('Ad')
    this.girisYapanSoyad=localStorage.getItem('Soyad')
    this.girisYapanId=localStorage.getItem('id')
    this.partiler();

  }
  partiler(){
    this.secimService.getParti().subscribe(x=>{
        this.partis=x
        console.log("this part",this.partis)
    })
  }
  secimYap(event:any){

    this.secilenParti=this.partis.filter(x=>x.Id==event)
    console.log("x",this.secilenParti)
    console.log("yyy",this.girisYapanId)
    this.intCeviri=parseInt(this.girisYapanId)
    console.log("zzzz",this.intCeviri)

    let params={
      AdayId:this.secilenParti[0].Id,
      KullaniciId:this.intCeviri,
      Tarih:moment().format()
    }
    console.log("prams",params)

    this.dialogService.openConfirmDialog(this.secilenParti[0].Ad+" "+this.secilenParti[0].Soyad+' isimli adaya oy vereceksiniz onaylıyormusunuz?').afterClosed().subscribe(res=>{
      if(res==true){
        this.secimService.postOy(params).subscribe(x=>{
          console.log("x",x)
        });
        this.toastr.success(this.secilenParti[0].Ad+" "+this.secilenParti[0].Soyad+" 'isimli adaya başarılı bir şekilde oy verdiniz.")
        this.router.navigate(["home"]);

      }
    });


  }

}
