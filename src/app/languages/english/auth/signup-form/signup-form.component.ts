import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserUniversity } from 'src/app/interfaces/user-university';
import { confirmPassword } from 'src/app/custom-validators/confirm-password.validator';
import { validateName } from 'src/app/custom-validators/validate-name.validators';

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
  confirmPassword!: FormControl;
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
      validateName,
    ]);
    this.userMName = new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      validateName,
    ]);
    this.userLName = new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      validateName,
    ]);
    this.userEmail = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);
    this.userPassword = new FormControl('', [
      Validators.required,
      Validators.pattern('^(?=.*[A-Z].*[a-z])(?=.*[0-9]).{8,30}$'),
    ]);
    this.confirmPassword = new FormControl('', [
      Validators.required,
      Validators.pattern('^(?=.*[A-Z].*[a-z])(?=.*[0-9]).{8,30}$'),
    ]);
    this.iAgree = new FormControl(null, [Validators.requiredTrue]);
  }

  createForm() {
    this.signupForm = new FormGroup(
      {
        userUniversity: this.userUniversity,
        userFName: this.userFName,
        userMName: this.userMName,
        userLName: this.userLName,
        userEmail: this.userEmail,
        userPassword: this.userPassword,
        confirmPassword: this.confirmPassword,
        iAgree: this.iAgree,
      },
      confirmPassword
    );
  }
  onSubmit() {
    if (this.signupForm.invalid) {
      Object.keys(this.signupForm.controls).forEach((key) => {
        console.log(key);
        this.signupForm.controls[key].markAsDirty();
        this.signupForm.controls[key].markAsTouched();
      });
      return;
    }
  }
}
