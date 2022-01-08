import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  constructor(public tasksServ:TasksService,
    private router:Router) { }

  ngOnInit(): void {
  }
  SaveTask(title:any,des:any){
this.tasksServ.SaveTask(title.value, des.value)
this.router.navigate(['/en/td'])
  }

}
