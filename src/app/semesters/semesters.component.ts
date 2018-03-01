import { Component, OnInit } from '@angular/core';
import { Course, CourseList, SemesterRepository } from '../domain';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-semesters',
  templateUrl: './semesters.component.html',
  styleUrls: ['./semesters.component.css']
})
export class SemestersComponent implements OnInit {
  private courses: Course[];
  private loaded = false;
  private semester: CourseList;
  private s;
  private sub;
  constructor(
    private semesterRepository: SemesterRepository,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.s = params['semester']; // In a real app: dispatch action to load the details here.
    });
    this.semesterRepository.getBySemester(this.s)
      .subscribe(x => this.onCoursesLoaded(x));
  }
  private onCoursesLoaded(courses: CourseList) {
    this.semester = courses[0];
    this.courses = this.semester.courses;
    this.loaded = true;
    console.log(this.semester);
    console.log(this.courses);

  }
}
