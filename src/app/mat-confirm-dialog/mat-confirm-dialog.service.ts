import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material';
import { MatConfirmDialogComponent } from './mat-confirm-dialog.component';
@Injectable({
  providedIn:'root'
})

export class MatDialogService{

  url: any="http://localhost:56550/api/ADMIN";
  constructor(public dialog:MatDialog) {}

  openConfirmDialog(msg){
    return this.dialog.open(MatConfirmDialogComponent,{
      width:'390px',
      panelClass:'confirm-dialog-contanier',
      disableClose:true,
      data:{
        message:msg
      }
    })
  }

}
