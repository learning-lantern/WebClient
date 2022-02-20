import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.scss'],
})
export class TodoHeaderComponent implements OnInit {
  drop = false;
  constructor(private router: Router) {}
  dropToggle() {
    this.drop = !this.drop;
  }

  switchLang(oldLang: string, newLang: string) {
    const url = this.router.url;
    const url2 = url.replace(`/${oldLang}`, `/${newLang}`);
    this.router.navigate([url2]);
  }

  ngOnInit(): void {}
}
