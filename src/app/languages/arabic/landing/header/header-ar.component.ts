import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header-ar.component.html',
  styleUrls: ['./header-ar.component.scss']
})
export class HeaderArComponent implements OnInit {
  isActive ="home"
  constructor() { }

  ngOnInit(): void {
  }

  changeActive (str:string){
    this.isActive = str; 
  }

}

