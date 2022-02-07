import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isActive = 'home';
  isHidden = true;
  constructor() {}

  ngOnInit(): void {}
  changeActive(str: string) {
    this.isActive = str;
  }

  showSidebar() {
    this.isHidden = !this.isHidden;
  }

  scrollTO(str: string) {
    document.getElementById(str)?.scrollIntoView({ behavior: 'smooth' });
  }
}
