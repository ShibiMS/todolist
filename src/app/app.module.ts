import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { AddtodoModule } from './popup/addtodo/addtodo.module';
import { AllComponent } from './filter/all/all.component';
import { Routes, RouterModule } from '@angular/router';
import {TodoFakeDb} from '../assets/todo'
const routes: Routes = [
  { path: 'all', component: AllComponent },
  
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    AllComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatButtonModule,
    AddtodoModule,
    RouterModule.forRoot(routes)
  ],
  providers: [TodoFakeDb],
  bootstrap: [AppComponent]
})
export class AppModule { }
