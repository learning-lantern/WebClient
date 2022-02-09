import { Component } from '@angular/core';

@Component({
  selector: 'app-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.scss'],
})
export class FormContainerComponent {
  isActive: string = 'login';
  constructor() {}

  getActive(str: string) {
    this.isActive = str;
  }
}
