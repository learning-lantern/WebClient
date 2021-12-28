import { Component, OnInit } from '@angular/core';
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

  ngOnInit(): void {
  }

}
