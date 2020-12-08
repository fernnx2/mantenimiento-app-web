import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuardService as AuthGuard} from 'src/app/guard/auth-guard.service';
import { PemsComponent } from './pems.component';

const routes: Routes = [
  { path: '', component: PemsComponent, canActivate:[AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PemsRouting{}
