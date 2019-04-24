import { Component, OnInit } from '@angular/core';
import {TodolistService} from '../../service/todolist.service';
@Component({
  selector: 'app-starred',
  templateUrl: './starred.component.html',
  styleUrls: ['./starred.component.scss']
})
export class StarredComponent implements OnInit {
  todoData:any[]=[];
  todotags:any;
  constructor(private _listService:TodolistService) { }

  ngOnInit() {
    this.todoData = this._listService.getTodolistStarred();
    this.todotags = this._listService.getTodolisttags();
  }

}
