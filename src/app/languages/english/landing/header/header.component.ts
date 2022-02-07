import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isActive = "home";
  isHidden = true;
  constructor() { }

  ngOnInit(): void {
  }
  changeActive(str: string) {
    this.isActive = str;
  }

  showSidebar() {
    this.isHidden = !this.isHidden;
  }
  tohome() {
    (<HTMLInputElement>document.getElementById("home")).scrollIntoView({ behavior: "smooth" });
  }
  tocontact() {
    (<HTMLInputElement>document.getElementById("contact")).scrollIntoView({ behavior: "smooth" });
  }
  toservices() {
    (<HTMLInputElement>document.getElementById("services")).scrollIntoView({ behavior: "smooth" });

  }
}
