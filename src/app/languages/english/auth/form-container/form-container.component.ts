import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.scss'],
})
export class FormContainerComponent {
  isActive: string = 'login';
  constructor(private router: Router) {
    if (localStorage.getItem('passport')) router.navigate(['/en/class']);
    else this.router.navigate(['en/auth/login']);
  }

  getActive(str: string) {
    this.isActive = str;
  }
}
