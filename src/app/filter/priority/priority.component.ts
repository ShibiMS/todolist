import { Component, OnInit } from '@angular/core';
import {TodolistService} from '../../service/todolist.service';
@Component({
  selector: 'app-priority',
  templateUrl: './priority.component.html',
  styleUrls: ['./priority.component.scss']
})
export class PriorityComponent implements OnInit {
  todoData:any[]=[];
  todotags:any;
  constructor(private _listService:TodolistService) { }

  ngOnInit() {
    this.todoData = this._listService.getTodolistPriority();
    this.todotags = this._listService.getTodolisttags();
     console.log('show data', this._listService.getTodolistPriority());
  }

}
