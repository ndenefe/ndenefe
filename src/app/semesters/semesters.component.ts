import { Component, OnInit } from '@angular/core';
import { Course, CourseList, SemesterRepository } from '../domain';

@Component({
  selector: 'app-semesters',
  templateUrl: './semesters.component.html',
  styleUrls: ['./semesters.component.css']
})
export class SemestersComponent implements OnInit {
  private courses: CourseList;
  private loaded = false;
  constructor(
    private semesterRepository: SemesterRepository
  ) { }

  ngOnInit() {
    this.semesterRepository.getBySemester('S18')
      .subscribe(x => this.onSemesterLoaded(x));
  }

  private onSemesterLoaded(courses: CourseList){
    this.courses = courses;
    this.loaded = true;
    console.log(this.courses);

  }

}
