import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SolicitudMantenimientoComponent } from './solicitud-mantenimiento.component';
import {AuthGuardService as AuthGuard} from 'src/app/guard/auth-guard.service';
const routes: Routes = [
  { path: '', component: SolicitudMantenimientoComponent, canActivate:[AuthGuard] },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolicitudMantenimientoRoutingModule {}
