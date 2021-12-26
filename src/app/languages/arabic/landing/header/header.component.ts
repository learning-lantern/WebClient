import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isActive = "home"
  constructor() { }

  ngOnInit(): void {
  }

  changeActive(str: string) {
    this.isActive = str;
  }

}

