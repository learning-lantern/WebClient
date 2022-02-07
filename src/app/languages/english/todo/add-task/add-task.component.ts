import { ThrowStmt } from "@angular/compiler";
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TasksService } from "src/app/services/tasks.service";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  constructor(public tasksServ: TasksService,
    private router: Router) {
  }

  ngOnInit(): void {
  }

  SaveTask(title: any, des: any) {
    // console.log(title.value,des.value)
    this.tasksServ.saveTask(title.value, des.value)
    this.router.navigate(['/en/td'])
  }

}
