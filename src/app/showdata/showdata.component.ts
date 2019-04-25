import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {TodolistService} from '../service/todolist.service';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-showdata',
  templateUrl: './showdata.component.html',
  styleUrls: ['./showdata.component.scss']
})
export class ShowdataComponent implements OnInit,OnChanges {
  editformvalue:any=[];
  todotags:any;
@Input()
showeditDatabyId:any;
constructor(private fb:FormBuilder, private _todoService:TodolistService) { }
  editTodoForm = this.fb.group({
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
    mobile:[''],
    tags:['']
  });

  startDate = new Date();
   ngOnInit() {   
    this.todotags = this._todoService.getTodolisttags();
  }
  ngOnChanges(){
    //this.todotags = this._todoService.getTodolisttags();
   this.editformvalue = this._todoService.getdatafromservice();
    console.log('gweeegggg',this.editformvalue);
    if(this.editformvalue){
    this.editTodoForm.patchValue({ 
      id:   this.editformvalue.id,
      title:this.editformvalue.title,    
      notes:this.editformvalue.notes,  
      startDate:new Date(this.editformvalue.startDate),
      dueDate:new Date(this.editformvalue.dueDate),
      starred:this.editformvalue.starred,
      important:this.editformvalue.important,
      completed:this.editformvalue.completed,
      deleted:this.editformvalue.deleted,
      tags: this.editformvalue.tags     
      });
    }
    console.log('PV',this.editTodoForm.value);
  }

  updateTodo(id){
    this.editTodoForm.value.id= id;
    console.log('update All to do',this.editTodoForm.value);   
    this._todoService.updateToDoData(this.editTodoForm.value);
    
  }

  
}
