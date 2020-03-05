import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

import { CoursesService } from './courses.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: any[];
  page: number;
  subscription: Subscription;

  constructor(
    private route: ActivatedRoute, 
    private _coursesService: CoursesService
    ) { }

  ngOnInit() {

    this.courses = this._coursesService.getCourses();

    this.subscription = this.route.queryParams.subscribe(
      (queryParams: any) => {
        this.page = queryParams['page'];
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
