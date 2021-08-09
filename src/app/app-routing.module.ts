import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavBarComponent } from './bar/nav-bar/nav-bar.component';
import { SideBarComponent } from './bar/side-bar/side-bar.component';
import { ClassroomComponent } from './components/classroom/classroom.component';
import { StudentComponent } from './components/student/student.component';
import { TeacherComponent } from './components/teacher/teacher.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full'}
  ,
  { path: 'app-root', component: AppComponent },
  { path: 'teacher', component: TeacherComponent },
  { path: 'student', component: StudentComponent },
  { path: 'classroom', component: ClassroomComponent },
  { path: 'side-bar', component: SideBarComponent },
  { path: 'nav-bar', component: NavBarComponent },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
