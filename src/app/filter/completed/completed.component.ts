import { Component, OnInit } from '@angular/core';
import {TodolistService} from '../../service/todolist.service';
@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})
export class CompletedComponent implements OnInit {
  todoData:any[]=[];
  todotags:any;
  constructor(private _listService:TodolistService) { }

  ngOnInit() {
    this.todoData = this._listService.getTodolistCompleted();
    this.todotags = this._listService.getTodolisttags();
  }

}
