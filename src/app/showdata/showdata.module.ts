import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowdataComponent } from '../showdata/showdata.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialogModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule, MatButtonModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodolistService } from '../service/todolist.service';
@NgModule({
  declarations: [
    ShowdataComponent
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
  entryComponents:[ShowdataComponent]
})
export class ShowdataModule { }
