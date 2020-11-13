import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog } from '@angular/material';
import { DialogBodyComponent } from '../dialog-body/dialog-body.component';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,public dialog: MatDialog) {}

  ngOnInit() {
  }
  navigateToOy() {
    this.router.navigateByUrl('/girisyap');
 }
 openDialog() {
  this.dialog.open(DialogBodyComponent,{
    width:'500px'
  });
}
}

