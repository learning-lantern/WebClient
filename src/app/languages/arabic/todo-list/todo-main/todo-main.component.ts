import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/core/Http/api.service';
import { TodoTask } from 'src/app/interfaces/todo-task.interface';

@Component({
  selector: 'app-todo-main',
  templateUrl: './todo-main.component.html',
  styleUrls: ['./todo-main.component.scss']
})
export class TodoMainComponent implements OnInit {
  drop = false;
  isHidden = true;
  Hidden=true;
  chosen = false;
  myChoice = '';
  taskList: TodoTask[] = [];

  addTaskForm: FormGroup;
  constructor(private fb: FormBuilder, private apiserv: ApiService) {
    this.addTaskForm = this.CreatNewTask('task');
  }
  showSidebar() {
    this.isHidden = !this.isHidden;
  }
  showbar() {
    this.Hidden = !this.Hidden;
  }
  gettasks() {
    this.apiserv.getTasks().subscribe((task) => {
      console.log('task', task);
    });
  }
  deletetasks() {
    this.apiserv.deleteTasks().subscribe((task) => {
      console.log('task', task);
    });
  }

  CreatNewTask(tasks: string): FormGroup {
    let newTasks = this.fb.group({});
    newTasks = this.fb.group({
      task: '',
      date: this.fb.group({
        dueDate: '',
        repeat: '0',
      }),
    });
    return newTasks;
  }

  getTasks(): FormArray {
    return <FormArray>this.addTaskForm.get('addNewTask');
  }

  // to add task in array

  addtask() {
    let newTask = this.addTaskForm.value;
    this.taskList.push(newTask);
  }

  removeTask(item: number) {
    this.taskList.splice(item, 1);
  }    

  setRepeat(str: string): void {
    this.myChoice = str;
    this.drop = !this.drop;
  }
  ngOnInit(): void {
  }

}
