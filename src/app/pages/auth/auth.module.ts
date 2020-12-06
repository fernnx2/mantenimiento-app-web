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
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { LogoutComponent } from './logout/logout.component';
@NgModule({
  declarations: [LoginComponent, RegisterComponent, LogoutComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    NzLayoutModule,
    NzFormModule,
    NzButtonModule,
    ReactiveFormsModule,
    NzInputModule,
    NzCheckboxModule,
    NzIconModule,
    NzSelectModule,
    NzMessageModule,
    NzPageHeaderModule 
  ],
  exports:[
    LoginComponent,
    RegisterComponent
  ],
  providers:[
  
  ]
})
export class AuthModule { }
