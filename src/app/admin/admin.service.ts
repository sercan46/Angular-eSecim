import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";
declare var require: any

@Injectable({
  providedIn:'root'
})

export class AdminService{

  url: any="http://localhost:56550/api/ADMIN";
  constructor(public http: HttpClient) {}

  adminService(): any {
      return this.http.get(this.url)

  }

}
