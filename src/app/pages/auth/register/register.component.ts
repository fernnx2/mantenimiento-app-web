import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/authService/authService.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { concatMap } from 'rxjs/operators';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  validateForm!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private message: NzMessageService) {}


  submitForm(): void {
    
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    if(this.validateForm.status === 'VALID'){
      const objMessage = this.message.loading('Action in progress');
      const user = new User();
      user.username = this.validateForm.get('nickname').value;
      user.realm = this.validateForm.get('nickname').value;
      user.email = this.validateForm.get('email').value;
      user.password = this.validateForm.get('password').value;
      user.additionalProp1 ={rol: this.validateForm.get('rol').value};
      this.authService.signup(user).subscribe( (resp:any)=>{
        objMessage.onClose!.pipe(
          concatMap(() => this.message.success('Usuario Registrado!', { nzDuration: 3500 }).onClose!),
        )
        .subscribe(() => {
          this.validateForm.reset();
          console.log('All completed!');
        });
      }, err =>{
        objMessage.onClose!.pipe(
          concatMap(() => this.message.error('Error al Registrar el usuario!', { nzDuration: 3500 }).onClose!),
        )
        .subscribe(() => {
          console.log('All completed!');
        });
      })
    }
  }
  

  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() => this.validateForm.controls.checkPassword.updateValueAndValidity());
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required]],
      checkPassword: [null, [Validators.required, this.confirmationValidator]],
      nickname: [null, [Validators.required]],
      rol: [null, [Validators.required]],
    });
  }

}