import { Injectable } from '@angular/core';
import{ TodoFakeDb } from '../../assets/todo';
@Injectable({
  providedIn: 'root'
})
export class TodolistService {
  adddata:any=[];
  dataarray:any;
  constructor(private todoList: TodoFakeDb) { }

  addTodolist(data){
    if(data)
    {
      this.dataarray = data;
    }
  
   console.log('dataarray',this.dataarray);
   //return this.dataarray;
  }
  getTodolistadded(){
    this.adddata = this.todoList.todos;
     let randomid = Math.floor(Math.random() * 100) + 1;  
    
    if(this.dataarray)
    {
      this.dataarray['id'] = randomid;
      this.adddata.push(this.dataarray);
    }    
    console.log("this.adddata",this.adddata)
    return this.adddata;
    
  }

  getTodolisttags(){
    return this.todoList.tags;
  }
  getTodolistStarred(){
    let data = this.todoList.todos.filter((x) =>  x.starred === true );
    console.log('datahere',data);
    return data; 
  }
  getTodolistCompleted(){
    let data = this.todoList.todos.filter((x) =>  x.completed === true );
    console.log('datahere',data);
    return data; 
  }
  getTodolistDeleted(){
    let data = this.todoList.todos.filter((x) =>  x.deleted === true );
    console.log('datahere',data);
    return data; 
  }
  getTodolistPriority(){
    let data = this.todoList.todos.filter((x) =>  x.important === true );
    console.log('datahere',data);
    return data; 
  }
  getTodolistSchedule(){
    let data = this.todoList.todos.filter((x) =>  x.dueDate != null );
    console.log('datahere',data);
    return data; 
  }
  getTodolistToday(){
    let data = this.todoList.todos.filter((x) =>  x.dueDate != null );
    console.log('datahere',data);
    return data; 
  }

//   formatDate(date) {
//     var d = new Date(date),
//         month = '' + (d.getMonth() + 1),
//         day = '' + d.getDate(),
//         year = d.getFullYear();

//     if (month.length < 2) month = '0' + month;
//     if (day.length < 2) day = '0' + day;

//     return [year, month, day].join('-');
// }

getTodolistByID(id){
  console.log('adddatabyid', this.adddata)
  return this.adddata.find(item => item.id === id);
}

}
