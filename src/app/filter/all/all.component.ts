import { Component, OnInit } from '@angular/core';
import {TodolistService} from '../../service/todolist.service';
@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {
  todoData:any[]=[];
  todotags:any;
  editTodo:any[]=[];
  deleteTodo:any;
  constructor(private _listService:TodolistService) { }

  ngOnInit() {
   
   this.todoData = this._listService.getTodolistadded();
   this.todotags = this._listService.getTodolisttags();
    console.log('show data', this._listService.getTodolistadded());
  }

  // showAddedData(){
  //  this.todoData = this._listService.getTodolistadded();
  //   console.log('show datadd', this._listService.getTodolistadded());
  // }

  editAlldata(editid){  
    console.log('Alleditid',editid);
    this.editTodo = this._listService.getTodolistByID(editid);
    console.log('this.editTodo',this.editTodo);
  }

  deleteAlldata(deleteid){
    this.deleteTodo = this._listService.deleteTodolistByID(deleteid);
    console.log('delete1',this.deleteTodo)
  }
}
