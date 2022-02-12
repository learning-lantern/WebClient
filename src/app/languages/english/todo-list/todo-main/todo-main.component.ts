import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/core/Http/api.service';

@Component({
  selector: 'app-todo-main',
  templateUrl: './todo-main.component.html',
  styleUrls: ['./todo-main.component.scss']
})
export class TodoMainComponent implements OnInit {

  addNewTask=[];
  AddTask: FormGroup;
  constructor(
    private fb: FormBuilder,private apiserv:ApiService ) {

    this.AddTask = this.CreatNewTask('task');
  }
  gettasks(){
    this.apiserv.getTasks().subscribe((task) =>{
      console.log('task',task);
    });
    
  }
  deletetasks(){
    this.apiserv.deleteTasks().subscribe((task) =>{
      console.log('task',task);
    });
  }

  CreatNewTask(tasks: string): FormGroup {
    let newTasks = this.fb.group({});
    newTasks=this.fb.group({
      Task:'',
      addNewTask:this.fb.array([]),
        date:this.fb.group({
          dueDate:'',
          reminder:'',
          repeat:'',
        })
    });
    return newTasks
  }


  ngOnInit(): void {
  }
  getTasks(): FormArray {
    return <FormArray> this.AddTask.get('addNewTask');
  }
  
  // to add task in array

  addtask() {
    this.getTasks().push(this.CreatNewTask('newTasks'));
  }

  removeTask(i: number) {
    this.getTasks().removeAt(i);
  }

}
