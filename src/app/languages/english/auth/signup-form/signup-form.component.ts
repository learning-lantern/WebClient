import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { UserUniversity } from "src/app/interfaces/user-university";

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {
  universitiesList: UserUniversity[] = [
    {
      id: "0",
      name: "Assuit University"
    },
    {
      id: "1",
      name: "EELU University"
    },
  ]
  constructor() { }
  registerationForm = new FormGroup({
    userUniversity: new FormControl(null, Validators.required),
    fName: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    mName: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    lName: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    userEmail: new FormControl(null, [Validators.required, Validators.email]),
    userPassword: new FormControl(null, Validators.pattern("^(?=.*[A-Z].*[a-z])(?=.*[!@#$&*])(?=.*[0-9]).{8,30}$")),
    confirmPassword: new FormControl(null, Validators.pattern("^(?=.*[A-Z].*[a-z])(?=.*[!@#$&*])(?=.*[0-9]).{8,30}$")),
    iAgree: new FormControl(null, Validators.requiredTrue),
  })
  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.registerationForm.value)
    console.log(this.registerationForm.valid)

  }
}
