import { Component, OnInit } from '@angular/core';
import {TodolistService} from '../../service/todolist.service';
@Component({
  selector: 'app-deleted',
  templateUrl: './deleted.component.html',
  styleUrls: ['./deleted.component.scss']
})
export class DeletedComponent implements OnInit {
  todoData:any[]=[];
  todotags:any;
  editTodo:any[]=[];
  deleteTodo:any;
  constructor(private _listService:TodolistService) { }

  ngOnInit() {
    this._listService.getTodolistadded();
    this.todoData = this._listService.getTodolistDeleted();
    this.todotags = this._listService.getTodolisttags();
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
