import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from "src/app/tasks.service";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  taskID: any;
  task: any;
  constructor(public tasksServ: TasksService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.taskID = this.route.snapshot.paramMap.get('id')
    console.log(this.taskID)
    this.task = this.tasksServ.tasksList[this.taskID]
  }
  UpdateTask() {
    // this.tasksServ.UpdateTask(this.taskID, this.task)
    this.router.navigate(['/en/td'])
  }
  deleteTask() {
    this.tasksServ.deleteTask(this.taskID)
    this.router.navigate(['/en/td'])
  }

}
