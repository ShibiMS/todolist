import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodolistService {
  adddata:any=[];
  dataarray:any;
  constructor() { }

  addTodolist(data){
    console.log('datadata',data);
   this.dataarray =data;
   console.log('dataarray',this.dataarray);
   return this.dataarray;
  }
  getTodolistadded(){
    return this.dataarray;
  }
}
