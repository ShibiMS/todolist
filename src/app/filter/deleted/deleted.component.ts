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
  constructor(private _listService:TodolistService) { }

  ngOnInit() {
    this.todoData = this._listService.getTodolistDeleted();
    this.todotags = this._listService.getTodolisttags();
  }

}
