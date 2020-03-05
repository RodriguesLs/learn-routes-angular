import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { Subscription } from 'rxjs';

import { CoursesService } from '../courses.service'

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  id: number;
  subscription: Subscription;
  course: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private _coursesService: CoursesService) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];
        this.course = this._coursesService.getCourse(this.id);

        if(this.course == null)
          this.router.navigate(['/course-not-found']);
      }
    )
  }

}
