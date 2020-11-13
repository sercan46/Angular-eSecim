import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn:'root'
})

export class SecimService{

  constructor(public http: HttpClient) {}

 getParti(): any {
      return this.http.get('api/Adaylars')
  }
  postOy(params):any{
    console.log("params",params)
    return this.http.post('api/Oylars',params)
  }

}
