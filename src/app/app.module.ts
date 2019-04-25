import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatListModule, MatIconModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { AddtodoModule } from './popup/addtodo/addtodo.module';
import { AllComponent } from './filter/all/all.component';
import { Routes, RouterModule } from '@angular/router';
import {TodoFakeDb} from '../assets/todo';
import { StarredComponent } from './filter/starred/starred.component';
import { CompletedComponent } from './filter/completed/completed.component';
import { DeletedComponent } from './filter/deleted/deleted.component';
import { PriorityComponent } from './filter/priority/priority.component';
import { ScheduleComponent } from './filter/schedule/schedule.component';
import { TodayComponent } from './filter/today/today.component';
import { ShowdataComponent } from './showdata/showdata.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
const routes: Routes = [
  { path: '', component: AllComponent },
  { path: 'all', component: AllComponent },
  { path: 'starred', component: StarredComponent },
  { path: 'priority', component: PriorityComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'today', component: TodayComponent },
  { path: 'completed', component: CompletedComponent },
  { path: 'deleted', component: DeletedComponent },
  
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    AllComponent,
    StarredComponent,
    CompletedComponent,
    DeletedComponent,
    PriorityComponent,
    ScheduleComponent,
    TodayComponent,
    ShowdataComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    AddtodoModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    RouterModule.forRoot(routes)
  ],
  providers: [TodoFakeDb,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
