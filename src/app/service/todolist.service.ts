import { Injectable } from '@angular/core';
import{ TodoFakeDb } from '../../assets/todo';
import { DatePipe } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class TodolistService {
  adddata:any=[];
  dataarray:any;
  showTodo:any;
  constructor(private todoList: TodoFakeDb,private datePipe: DatePipe) { }

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
    let data = this.adddata.filter((x) =>  x.starred === true );
    console.log('datahere',data);
    return data; 
  }
  getTodolistCompleted(){
    let data = this.adddata.filter((x) =>  x.completed === true );
    console.log('datahere',data);
    return data; 
  }
  getTodolistDeleted(){
    let data = this.adddata.filter((x) =>  x.deleted === true );
    console.log('datahere',data);
    return data; 
  }
  getTodolistPriority(){
    let data = this.adddata.filter((x) =>  x.important === true );
    console.log('datahere',data);
    return data; 
  }
  getTodolistSchedule(){
    let data = this.adddata.filter((x) =>  x.dueDate != null );
    console.log('datahere',data);
    return data; 
  }
  getTodolistToday(){
    let data = this.adddata.filter((x) =>   this.datePipe.transform(x.dueDate, 'yyyy-MM-dd') == this.datePipe.transform(new Date(), 'yyyy-MM-dd') );
    console.log('datahere',data);
  
    return data; 
  }

  getTodolistByID(id){
  console.log('adddatabyid', this.adddata)
  //this.adddata.find(item => item.id === id);
  this.showTodo = this.adddata.find(item => item.id === id);
  return this.showTodo;
}


getdatafromservice(){
  return this.showTodo;
}

updateToDoData(formData){ 
const selectedArray = formData;console.log('selectedArray',selectedArray)
const targetIdx = this.adddata.map(item => item.id).indexOf(selectedArray.id);
this.adddata[targetIdx] = selectedArray;
const newArray = this.adddata;
console.log('newArray',newArray)
this.getTodolistStarred();
}

deleteTodolistByID(id){
  console.log(id)
  console.log('b4deletefullarray',this.adddata)
  
  if (id > -1) {
    this.adddata.splice(id, 1);
    console.log('afterdelete',this.adddata);
  }
  // array = [2, 9]
  
}
}
