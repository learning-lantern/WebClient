import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-todo-main',
  templateUrl: './todo-main.component.html',
  styleUrls: ['./todo-main.component.scss']
})
export class TodoMainComponent implements OnInit {
  isHidden = true;

  AddTask: FormGroup;
  constructor(private fb: FormBuilder) {
    this.AddTask = this.CreatNewTask('init');
  }

  showSidebar() {
    this.isHidden = !this.isHidden;
  }



  getTasks(): FormArray {
    return this.AddTask.get('Addnewtask') as FormArray;
  }
  // to add task in array
  addtask() {
    this.getTasks().push(this.CreatNewTask('newtask'))
  }
  removeTask(i: number) {
    this.getTasks().removeAt(i);
  }
  CreatNewTask(tasks: string): FormGroup {
    let newTasks = this.fb.group({});
    switch (tasks) {
      case 'init':
        newTasks = this.fb.group({
          TaskName: '',
          TaskDate:'',
          Addnewtask: this.fb.array([6])
        });
        break;
      case 'newtask':
        newTasks = this.fb.group({
          // TaskName:'',
          TaskDetails: this.fb.array([])
        });
        break;
    }
    return newTasks
  }


  ngOnInit(): void {
  }

}
