import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/authService/authService.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  validateForm!: FormGroup;

  
  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]
      ],
      password: [null, [Validators.required, Validators.minLength(8)]],
      remember: [true]
    });
  }

  submitForm(): void {

    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    this.authService.login({
      email: this.validateForm.get('email').value,
      password: this.validateForm.get('password').value
    }).subscribe((resp: any) => {
      sessionStorage.setItem('token', resp.token);
      console.log(resp, 'Usuario Logueado');
    }, err => {
      console.log(err, 'Usuario no encontrado 404');
    }
    
    )
    
  }

}
