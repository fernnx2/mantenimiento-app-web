import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar.component';
import {AuthGuardService as AuthGuard} from 'src/app/guard/auth-guard.service';
const routes: Routes = [
  { path: '', component: CalendarComponent, canActivate:[AuthGuard] },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalendarRoutingModule {}
