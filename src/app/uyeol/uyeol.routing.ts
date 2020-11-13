import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UyeolComponent } from './uyeol.component';

const routes: Routes = [{path:'',component:UyeolComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UyeOlRoutingModule { }
