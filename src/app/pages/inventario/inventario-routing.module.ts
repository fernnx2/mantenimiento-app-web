import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuardService as AuthGuard} from 'src/app/guard/auth-guard.service';
import { InventarioComponent } from './inventario.component';
const routes: Routes = [
  { path: '', component: InventarioComponent, canActivate:[AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventarioRoutingModule { }