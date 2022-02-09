import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isActive = 'home';
  drop = false;
  isHidden = true;
  constructor(private router: Router) {}

  changeActive(str: string) {
    this.isActive = str;
  }

  showSidebar() {
    this.isHidden = !this.isHidden;
  }

  dropToggle() {
    this.drop = !this.drop;
  }

  switchLang(oldLang: string, newLang: string) {
    const url = this.router.url;
    const url2 = url.replace(`/${oldLang}`, `/${newLang}`);
    this.router.navigate([url2]);
  }
  scrollTO(str: string) {
    document
      .getElementById(str)
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
