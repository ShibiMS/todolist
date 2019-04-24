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
  ngOnInit() {
    this.todoData = this._listService.getTodolistToday();
    this.todotags = this._listService.getTodolisttags();
    console.log('show today data', this._listService.getTodolistToday());
  }

}
