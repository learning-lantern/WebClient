import { Injectable } from '@angular/core';
import { Task } from "../languages/english/interfaces/task";
@Injectable({
  providedIn: 'root'
})
export class TasksService {
  tasksList: Task[] = []
  constructor() { }
  saveTask(title: string, discription: string) {
    this.tasksList.push({
      title:title,
      discription:discription
    })
  };
  deleteTask(index: number) {
    this.tasksList.splice(index, 1)
  };
  UpdateTask(i:string,data:string){
      
  };
}
