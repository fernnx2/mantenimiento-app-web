import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {AuthGuardService as AuthGuard} from 'src/app/guard/auth-guard.service';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  { path: '', pathMatch: 'full',redirectTo:'login' },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent, canActivate: [AuthGuard]},
  { path: 'logout', component: LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
