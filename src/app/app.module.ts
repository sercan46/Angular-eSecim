import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { MatDialogModule, MatFormFieldModule, MatIconModule } from '@angular/material';
import { DialogBodyComponent } from './dialog-body/dialog-body.component';
import {MatButtonModule} from '@angular/material/button';
import { MatConfirmDialogComponent } from './mat-confirm-dialog/mat-confirm-dialog.component';
import { QuestionDialogComponent } from './question-dialog/question-dialog.component';
@NgModule({
  declarations: [
    AppComponent,
    DialogBodyComponent,
    MatConfirmDialogComponent,
    QuestionDialogComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MatDialogModule,
    MatButtonModule,
    MatIconModule


  ],
  entryComponents: [DialogBodyComponent,MatConfirmDialogComponent,QuestionDialogComponent],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
