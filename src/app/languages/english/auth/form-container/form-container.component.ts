import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.scss']
})
export class FormContainerComponent implements OnInit {
  isActive: string = "login";
  constructor() {
  }

  ngOnInit(): void {
  }

  getActive(str: string) {
    this.isActive = str;
  }

}
