import { Component, OnInit } from '@angular/core';
import { Course, CourseList, SemesterRepository } from '../domain';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-semesters',
  templateUrl: './semesters.component.html',
  styleUrls: ['./semesters.component.css']
})
export class SemestersComponent implements OnInit {
  private courses: CourseList;
  private semesters: CourseList[];
  private loaded = false;
  private semester;
  private sub;
  constructor(
    private semesterRepository: SemesterRepository,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.semester = params['semester']; // In a real app: dispatch action to load the details here.
    });
    this.semesterRepository.getBySemester(this.semester)
      .subscribe(x => this.onCoursesLoaded(x));
  }
  private onCoursesLoaded(courses: CourseList) {
    this.courses = courses;
    this.loaded = true;
    console.log(this.courses);

  }
}
