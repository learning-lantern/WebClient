import { Injectable } from '@angular/core';
import { TaskInterface } from '../languages/english/interfaces/task';
@Injectable({
  providedIn: 'root',
})
export class TasksService {
  tasksList: TaskInterface[] = [];
  constructor() {}
  saveTask(title: string, discription: string) {
    this.tasksList.push({
      title,
      discription,
    });
  }
  deleteTask(index: number) {
    this.tasksList.splice(index, 1);
  }
  updateTask(index: number, task: any) {
    this.tasksList[index] = task;
  }
}
