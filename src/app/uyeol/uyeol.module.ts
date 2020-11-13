import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule, MatIconModule, MatFormFieldModule } from '@angular/material';
import { UyeolComponent } from './uyeol.component';
import { UyeOlRoutingModule } from './uyeol.routing';


@NgModule({
  declarations: [UyeolComponent],
  imports: [
    CommonModule,
    UyeOlRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule



  ]


})
export class UyeOlModule { }
