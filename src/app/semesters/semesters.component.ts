import { Component, OnInit } from '@angular/core';
import { Course, CourseList, SemesterRepository } from '../domain';
@Component({
  selector: 'app-semesters',
  templateUrl: './semesters.component.html',
  styleUrls: ['./semesters.component.css']
})
export class SemestersComponent implements OnInit {
  private courses: CourseList;
  private semesters: CourseList[];
  private loaded = false;
  constructor(
    private semesterRepository: SemesterRepository
  ) { }

  ngOnInit() {
    this.semesterRepository.getAll()
      .subscribe(x => this.onSemestersLoaded(x));
  }
  private onSemestersLoaded(semesters: CourseList[]) {
    this.semesters = semesters;
    this.loaded = true;
    console.log(this.semesters);

  }
}
