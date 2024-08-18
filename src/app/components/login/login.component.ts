import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';
import { IUserLogin } from '../main/main.interface';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor( private fb: FormBuilder, private authService: AuthService){

    this.loginForm = this.fb.group({
      username: ['firatorhan', Validators.required],
      password: ['rastmobile', Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value)
    } else {
      console.log('Form geçerli değil.');
    }
  }
}
