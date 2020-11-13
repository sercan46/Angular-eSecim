import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { OyKullanService } from "./oykullan.service";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";
import { QuestionDialogComponent } from "../question-dialog/question-dialog.component";
import { MatDialogService } from "../mat-confirm-dialog/mat-confirm-dialog.service";
import { MatDialog } from "@angular/material";

@Component({
  selector: "app-oykullan",
  templateUrl: "./oykullan.component.html",
  styleUrls: ["./oykullan.component.css"],
})
export class OykullanComponent implements OnInit {
  constructor(
    private oyKullanService: OyKullanService,
    private toastr: ToastrService,
    private router: Router,
    private dialog: MatDialog
  ) {}
  form: FormGroup;
  kullanicilar: any[] = [];
  tcNumara: any;
  kullaniciAdi: any;
  password: any;
  deger = 0;
  girisAdi: any;
  girisSoyadi: any;
  id: any;
  oylar: any[] = [];
  ngOnInit() {
    this.oyKullan();
    this.form = new FormGroup({
      TC: new FormControl("", Validators.required),
      Password: new FormControl("", Validators.required),
    });
  }
  async girisYap() {
    this.deger = 0;

    this.tcNumara = this.form.controls["TC"].value;
    this.password = this.form.controls["Password"].value;

    this.kullanicilar.forEach((x) => {
      if (x.TC == this.tcNumara && x.Password == this.password) {
        this.girisAdi = x.Ad;
        this.girisSoyadi = x.Soyad;
        this.id = x.Id;
        this.deger = 1;
      }
    });

    let kullanici;
    let resp = await this.oyKullanService.getOylar().toPromise();
    console.log("resp", resp);
    this.oylar.push(resp);
    this.kullanicilar.forEach((x) => {
      if (x.TC == this.tcNumara && x.Password == this.password) {
        kullanici = x.Id;
      }
    });

    console.log("asad", kullanici);
    console.log("oylar", this.oylar);
    this.oylar[0].forEach((x) => {
      if (x.KullaniciId == kullanici) {
        this.toastr.warning("Daha Önce Bu TC Kimlik Numarası ile Oy Kullanılmıştır!");
        this.deger = 0;
        return false;
      } else {
        this.kullanicilar.forEach((x) => {
          if (x.TC == this.tcNumara && x.Password == this.password) {
            this.deger = 1;
          } else {
            this.deger = 2;
          }
        });
      }
    });

    console.log("deger", this.deger);

    if (this.deger == 1) {
      this.toastr.success("Giriş Başarılı");
      localStorage.setItem("TC", this.tcNumara);
      localStorage.setItem("Ad", this.girisAdi);
      localStorage.setItem("Soyad", this.girisSoyadi);
      localStorage.setItem("id", this.id);

      this.router.navigateByUrl("/secim");
    } else if (this.deger == 2) {
      this.toastr.error("Hatalı Giriş, Lütfen Bilgilerinizi Kontrol Ediniz!");
    }
  }
  oyKullan() {
    this.oyKullanService.getUser().subscribe((x) => {
      console.log("xx", x);
      this.kullanicilar = x;
    });
  }
  openPopup() {
    this.dialog.open(QuestionDialogComponent, {
      width: "300px",
    });
  }
  uyeol() {
    this.router.navigate(["uyeol"]);
  }
}
