import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn:'root'
})

export class OyKullanService{

  constructor(public http: HttpClient) {}

 getUser(): any {
      return this.http.get('api/Kullanıcı')

  }
  getOylar(){
    return this.http.get('api/Oylars')
  }

}
