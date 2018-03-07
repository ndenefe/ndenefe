import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Course, CourseList, SemesterRepository } from '../domain';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-semesters',
  templateUrl: './semesters.component.html',
  styleUrls: ['./semesters.component.css']
})
export class SemestersComponent implements OnInit {
  private courses: Course[];
  loaded;
  private semester: CourseList;
  private s;
  private sem;
  private sub;
  constructor(
    private semesterRepository: SemesterRepository,
    private route: ActivatedRoute,
    private cdRef: ChangeDetectorRef
  ) {
    this.loaded = false;
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.s = params['semester'];
      switch ( this.s ) {
        case 'S18': {
          this.sem = 'Spring 2018';
          break;
        }
        case 'F17': {
          this.sem = 'Fall 2017';
          break;
        }
        case 'S17': {
          this.sem = 'Spring 2017';
          break;
        }
        case 'F16': {
          this.sem = 'Fall 2016';
          break;
        }
        case 'S16': {
          this.sem = 'Spring 2016';
          break;
        }
        case 'F15': {
          this.sem = 'Fall 2015';
          break;
        }
      }
      this.cdRef.detectChanges();
      this.semesterRepository.getBySemester(this.s)
      .subscribe(x => this.onCoursesLoaded(x));
    });
  }
  private onCoursesLoaded(courses: CourseList) {
    this.semester = courses[0];
    this.courses = this.semester.courses;
    this.loaded = true;

  }
}
