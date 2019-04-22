import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddtodoComponent } from './addtodo.component';
import { MatDialogModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule, MatButtonModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {TodolistService} from '../../service/todolist.service';
@NgModule({
  declarations: [
    AddtodoComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatButtonModule
  ],
  providers: [TodolistService],
  entryComponents:[AddtodoComponent]
})
export class AddtodoModule { }
