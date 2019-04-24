import { Component, OnInit, Input } from '@angular/core';
import {TodolistService} from '../service/todolist.service';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-showdata',
  templateUrl: './showdata.component.html',
  styleUrls: ['./showdata.component.scss']
})
export class ShowdataComponent implements OnInit {
@Input()
showeditDatabyId;
  constructor(private fb:FormBuilder, private _todoService:TodolistService) { }
  editTodoForm = this.fb.group({
    title:['', Validators.required],
    notes:['',Validators.required],
    startDate:['', Validators.required],
    dueDate:['',Validators.required],
    starred:[''],
    important:[''],
    completed:[''],
    deleted:[''],
    frontend:[''],
    backend:[''],
    api:[''],
    issue:[''],
    mobile:['']
  });
startDate = new Date(1990, 0, 1);
  ngOnInit() {
  }

}
