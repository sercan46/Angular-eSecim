import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OykullanComponent } from './oykullan.component';

const routes: Routes = [{path:'',component:OykullanComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OyKullanRoutingModule { }
