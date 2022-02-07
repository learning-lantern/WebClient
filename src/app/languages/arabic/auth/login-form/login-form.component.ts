import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UserUniversity } from 'src/app/interfaces/user-university';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
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
  constructor() {
    this.initFormControls();
    this.createForm();
  }

  ngOnInit(): void {}

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
    console.log('subbmitter');
    if (this.loginForm.invalid) {
      Object.keys(this.loginForm.controls).forEach((key) => {
        console.log(key);
        this.loginForm.controls[key].markAsDirty();
        this.loginForm.controls[key].markAsTouched();
      });
      return;
    }
  }
}
