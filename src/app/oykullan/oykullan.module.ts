import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { OykullanComponent } from './oykullan.component';
import { OyKullanRoutingModule } from './oykullan.routing';
import { MatFormFieldModule, MatButtonModule, MatIconModule } from '@angular/material';


@NgModule({
  declarations: [OykullanComponent],
  imports: [
    CommonModule,
    OyKullanRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule



  ]


})
export class OyKullanModule { }
