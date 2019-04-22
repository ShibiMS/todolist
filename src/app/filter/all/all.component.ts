import { Component, OnInit } from '@angular/core';
import {TodolistService} from '../../service/todolist.service';
@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {

  constructor(private _listService:TodolistService) { }

  ngOnInit() {
    this._listService.getTodolistadded();
    console.log('show data', this._listService.getTodolistadded());
  }

  showAddedData(){
    this._listService.getTodolistadded();
    console.log('show data', this._listService.getTodolistadded());
  }

}
