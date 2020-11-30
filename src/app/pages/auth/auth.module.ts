import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from './login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import { NzFormModule } from 'ng-zorro-antd/form';
import {NzButtonModule} from 'ng-zorro-antd/button';
import { ReactiveFormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import {NzCheckboxModule} from 'ng-zorro-antd/checkbox';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { RegisterComponent } from './register/register.component';
import { AuthService } from 'src/app/services/authService/authService.service';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    NzLayoutModule,
    NzFormModule,
    NzButtonModule,
    ReactiveFormsModule,
    NzInputModule,
    NzCheckboxModule,
    NzIconModule
  ],
  exports:[
    LoginComponent,
    RegisterComponent
  ],
  providers:[
    AuthService
  ]
})
export class AuthModule { }
