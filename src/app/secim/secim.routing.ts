import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecimComponent } from './secim.component';

const routes: Routes = [{path:'',component:SecimComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecimRoutingModule { }
