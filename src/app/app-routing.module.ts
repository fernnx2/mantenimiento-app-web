import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'auth', loadChildren:() => import('./pages/auth/auth.module').then(a => a.AuthModule) },
  { path: 'inventario', loadChildren:() => import('./pages/inventario/inventario.module').then(a => a.InventarioModule) },
  { path: 'pems', loadChildren:() => import('./pages/pems/pems.module').then(p => p.PemsModule) },
  { path: 'calendar', loadChildren:() => import('./pages/calendar/calendar.module').then(c => c.CalendarModule) },
  { path: 'solicitud-mantenimiento', loadChildren:() => import('./pages/solicitud-mantenimiento/solicitud-mantenimiento.module').then(s => s.SolicitudMantenimientoModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
