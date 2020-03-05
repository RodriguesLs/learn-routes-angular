import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CoursesComponent } from './courses/courses.component'
import { CourseDetailComponent } from './courses/course-detail/course-detail.component'
import { CourseNotFoundComponent } from './course-not-found/course-not-found.component'
const routes: Routes = [

  { path: '', component: HomeComponent},
  { path: 'courses', component: CoursesComponent },
  { path: 'course/:id', component: CourseDetailComponent },
  { path: 'course/:id/edit', component: CoursesComponent },
  { path: 'course-not-found', component: CourseNotFoundComponent },
  { path: 'login', component: LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
