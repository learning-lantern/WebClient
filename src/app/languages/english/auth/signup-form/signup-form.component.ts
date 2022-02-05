import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserUniversity } from 'src/app/interfaces/user-university';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss'],
})
export class SignupFormComponent implements OnInit {
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
  signupForm!: FormGroup;
  userUniversity!: FormControl;
  userFName!: FormControl;
  userMName!: FormControl;
  userLName!: FormControl;
  userEmail!: FormControl;
  userPassword!: FormControl;
  confrimPassword!: FormControl;
  iAgree!: FormControl;
  constructor() {
    this.initFormControls();
    this.createForm();
  }
  ngOnInit(): void {}
  initFormControls() {
    this.userUniversity = new FormControl('', [Validators.required]);
    this.userFName = new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]);
    this.userMName = new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]);
    this.userLName = new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]);
    this.userEmail = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);
    this.userPassword = new FormControl('', [
      Validators.required,
      Validators.pattern('^(?=.*[A-Z].*[a-z])(?=.*[0-9]).{8,30}$'),
    ]);
    this.confrimPassword = new FormControl('', [
      Validators.required,
      Validators.pattern('^(?=.*[A-Z].*[a-z])(?=.*[0-9]).{8,30}$'),
    ]);
    this.iAgree = new FormControl(false, [Validators.requiredTrue]);
  }

  createForm() {
    this.signupForm = new FormGroup({
      userUniversity: this.userUniversity,
      userFName: this.userFName,
      userMName: this.userMName,
      userLName: this.userLName,
      userEmail: this.userEmail,
      userPassword: this.userPassword,
      confirmPassword: this.confrimPassword,
      iAgree: this.iAgree,
    });
  }
  onSubmit() {
    console.log(this.signupForm.valid);
    console.log(this.signupForm.value);
  }
}
