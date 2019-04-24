import { Component, OnInit } from '@angular/core';
import {TodolistService} from '../../service/todolist.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  todoData:any[]=[];
  todotags:any;
  constructor(private _listService:TodolistService) { }
 
  ngOnInit() {
    this.todoData = this._listService.getTodolistSchedule();
    this.todotags = this._listService.getTodolisttags();
     console.log('show data', this._listService.getTodolistSchedule());
  }

}
