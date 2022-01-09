import { Component, OnInit } from '@angular/core';
import { TasksService } from "src/app/tasks.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public tasksser: TasksService) { }

  ngOnInit() {
  }


  deleteTask(i: number) {
    this.tasksser.deleteTask(i)
  }

}
