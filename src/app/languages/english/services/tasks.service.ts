import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  tasks:Array<Task> =[
    {
      title:'1',
      description:'hghg'
    }
  ]

  constructor() { }
  
  deleteTask(i:number){
    console.log(i)
    this.tasks.splice(i,1)
  }
  SaveTask(title:string, description:string){
this.tasks.push({
  title,
  description
})
  }
  UpdateTask(i:number,data:string){


  }
}
