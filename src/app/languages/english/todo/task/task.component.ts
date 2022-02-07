import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  taskID: any;
  discription: string = '';
  title: string = '';
  constructor(
    public tasksServ: TasksService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.taskID = this.route.snapshot.paramMap.get('id');
    let task = this.tasksServ.tasksList[this.taskID];
    if (!task) this.taskID = false;
    this.title = task.title;
    this.discription = task.discription;
  }
  UpdateTask() {
    this.tasksServ.updateTask(this.taskID, {
      title: this.title,
      discription: this.discription,
    });
    this.router.navigate(['/en/td']);
  }
  deleteTask() {
    this.tasksServ.deleteTask(this.taskID);
    this.router.navigate(['/en/td']);
  }
}
