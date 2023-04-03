import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiWorkShopComponent } from './api-work-shop/api-work-shop.component';

const routes: Routes = [
  { path: '', redirectTo: 'work-shop', pathMatch: 'full' },
  { path: 'work-shop', component: ApiWorkShopComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
