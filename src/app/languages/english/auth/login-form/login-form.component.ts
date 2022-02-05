import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  loginForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({});
  }

  ngOnInit(): void {}
}
