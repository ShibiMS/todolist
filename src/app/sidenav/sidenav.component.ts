import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddtodoComponent } from '../popup/addtodo/addtodo.component';
import {TodolistService} from '../service/todolist.service';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor(private dialog:MatDialog,private _listService:TodolistService) { }

  ngOnInit() {
  }

  openDialog() {
    let dialogRef = this.dialog.open(AddtodoComponent, {
      width:"50%",
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed',result );
     //this._listService.addTodolist(result);
      // this._listService.getTodolistadded();
      console.log('show datasidenav', this._listService.getTodolistadded());
    });
  } 
}
