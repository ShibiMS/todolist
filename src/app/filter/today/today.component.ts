import { Component, OnInit } from '@angular/core';
import {TodolistService} from '../../service/todolist.service';
@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss']
})
export class TodayComponent implements OnInit {

  constructor(private _listService:TodolistService) { }
  todoData:any[]=[];
  todotags:any;
  editTodo:any[]=[];
  deleteTodo:any;
  ngOnInit() {
    this._listService.getTodolistadded();
    this.todoData = this._listService.getTodolistToday();
    this.todotags = this._listService.getTodolisttags();
    console.log('show today data', this._listService.getTodolistToday());
  }
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
