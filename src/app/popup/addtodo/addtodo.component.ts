import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {TodolistService} from '../../service/todolist.service';
@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.scss']
})
export class AddtodoComponent implements OnInit {
  change:any;
  starred:boolean;
  important:boolean;
  markdone:boolean;
  delete:boolean;
  constructor(private fb:FormBuilder, private _todoService:TodolistService ) { }
  
  addTodoForm = this.fb.group({
    title:['', Validators.required],
    notes:['',Validators.required],
    startDate:['', Validators.required],
    dueDate:['',Validators.required],
    starred:[''],
    important:[''],
    completed:[''],
    deleted:[''],
    frontend:[''],
    backend:[''],
    api:[''],
    issue:[''],
    mobile:['']
  })
startDate = new Date(1990, 0, 1);
  ngOnInit() {
  }

  filterclick(change){
    this.change = change;
    console.log('change', change);
    if(change=='star'){
      this.starred == true;
    }
    else if(change=='important'){
      this.important == true;
    }
    else if(change=='done'){
      this.markdone == true;
    }
    else if(change=='delete'){
      this.delete == true;
    }
  }

  submitAddTodo(){
    
    console.log('formvalue', JSON.stringify(this.addTodoForm.value));

    this._todoService.addTodolist(this.addTodoForm.value);
  }
}
