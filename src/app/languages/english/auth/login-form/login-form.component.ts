import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/core/Http/http.service';
import { UserUniversity } from 'src/app/interfaces/user-university';
import { environment as env } from 'src/environments/environment';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  universitiesList: UserUniversity[] = [
    {
      id: '0',
      name: 'Assuit University',
    },
    {
      id: '1',
      name: 'EELU University',
    },
  ];
  loginForm!: FormGroup;
  userUniversity!: FormControl;
  userEmail!: FormControl;
  userPassword!: FormControl;
  constructor(private http: HttpService, private router: Router) {
    this.initFormControls();
    this.createForm();
  }

  initFormControls() {
    this.userUniversity = new FormControl('', [Validators.required]);
    this.userEmail = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);
    this.userPassword = new FormControl('', [
      Validators.required,
      Validators.pattern('^(?=.*[A-Z].*[a-z])(?=.*[0-9]).{8,30}$'),
    ]);
  }

  createForm() {
    this.loginForm = new FormGroup({
      userUniversity: this.userUniversity,
      userEmail: this.userEmail,
      userPassword: this.userPassword,
    });
  }
  onSubmit() {
    if (this.loginForm.invalid) {
      Object.keys(this.loginForm.controls).forEach((key) => {
        console.log(key);
        this.loginForm.controls[key].markAsDirty();
        this.loginForm.controls[key].markAsTouched();
      });
    } else {
      console.log(this.loginForm.value);
      this.http
        .doPost(`${env.authURL}/login`, this.loginForm.value, {})
        .subscribe(
          (res) => {
            localStorage.setItem('passport', JSON.stringify(res));
            this.router.navigate(['/en/class']);
          },
          (error) => {
            if (error.status === 401) return;
          }
        );
    }
  }
}
