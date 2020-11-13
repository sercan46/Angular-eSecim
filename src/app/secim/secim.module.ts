import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SecimComponent } from './secim.component';
import { SecimRoutingModule } from './secim.routing';
import { MatButtonModule } from '@angular/material';


@NgModule({
  declarations: [SecimComponent],
  imports: [
    CommonModule,
    SecimRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule


  ]


})
export class SecimModule { }
