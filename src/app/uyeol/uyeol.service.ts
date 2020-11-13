import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn:'root'
})

export class UyeOlService{

  constructor(public http: HttpClient) {}


  postUyelik(params):any{
    console.log("prams",params)
    console.log("params",params)
    return this.http.post('api/Kullanıcı',params)
  }

}
