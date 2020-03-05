import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  getCourses() {
    return [
      {id: 1, name: 'Angular'},
      {id: 2, name: 'Node'}
    ];
  }

  getCourse(id: number) {
    let courses = this.getCourses();
    
    // courses.forEach(element => {
    //   debugger;
    //   if(element.id == id) {
    //     return element
    //   }
    // }) Não fununcia.
    
    for (let course of courses) {
      if(course.id == id) {
        return course;
      }
    }


    return null
  }

  constructor() { }
}
