import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassroomComponent } from './components/classroom/classroom.component';
import { StudentComponent } from './components/student/student.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import { SideBarComponent } from './bar/side-bar/side-bar.component';
import { NavBarComponent } from './bar/nav-bar/nav-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    TeacherComponent,
    StudentComponent,
    ClassroomComponent,
    SideBarComponent,
    NavBarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
