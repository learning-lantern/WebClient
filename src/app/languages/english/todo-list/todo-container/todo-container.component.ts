import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.scss'],
})
export class TodoContainerComponent implements OnInit {
  drop = false;
  constructor() {}

  ngOnInit(): void {}
}
