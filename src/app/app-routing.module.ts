import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path:'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  {path:'girisyap', loadChildren: () => import('./oykullan/oykullan.module').then(m => m.OyKullanModule)},
  {path:'uyeol', loadChildren: () => import('./uyeol/uyeol.module').then(m => m.UyeOlModule)},
  {path:'secim', loadChildren: () => import('./secim/secim.module').then(m => m.SecimModule)},
  {path:'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
