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
  private loaded;
  private semester: CourseList;
  private s;
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
      this.cdRef.detectChanges();
      this.semesterRepository.getBySemester(this.s)
      .subscribe(x => this.onCoursesLoaded(x));
    });
  }
  private onCoursesLoaded(courses: CourseList) {
    this.semester = courses[0];
    this.courses = this.semester.courses;
    this.loaded = true;
    console.log(this.semester);
    console.log(this.courses);

  }
}
