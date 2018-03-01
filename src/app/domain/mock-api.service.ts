import { Observable } from 'rxjs';
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class MockApi implements InMemoryDbService {
    createDb(): any {
        return {
          semesters: [
            {
                semester: 'S18',
                courses: [
                    {id: 'CSE 3330-801', name: 'Database Concepts', type: 'Lecture'},
                    {id: 'CSE 3330-N12C', name: 'Database Concepts', type: 'Lab'},
                    {id: 'CSE 3339-801', name: 'Information Assurance & Security', type: 'Lecture'},
                    {id: 'CSE 3339-N13', name: 'Information Assurance & Security', type: 'Lab'},
                    {id: 'CSE 3353-001', name: 'Fundamentals of Algorythms', type: 'Lecture'},
                    {id: 'JAPN 1402-801', name: 'Beginning Japanese: 2nd Term', type: 'Lecture'},
                    {id: 'JAPN 1402-N10', name: 'Beginning Japanese: 2nd Term', type: 'Lab'},
                    {id: 'ANTH 3319-001', name: 'Humanity & Global Env Change', type: 'Lecture'}
                ]
            },
            {
                semester: 'F17',
                courses: [
                    {id: 'CHEM 1303', name: 'General Chemistry', type: 'Lecture'},
                    {id: 'CHEM 1113', name: 'General Chemistry Laboratory', type: 'Lab'},
                    {id: 'CSE 3342', name: 'Programming Languages', type: 'Lecture'},
                    {id: 'CSE 3345', name: 'Graphical User Interface', type: 'Lecture'},
                    {id: 'CSE 3381-801', name: 'Digital Logic Design', type: 'Lecture'},
                    {id: 'CSE 4340', name: 'Beginning Japanese: 2nd Term', type: 'Lecture'},
                ]
            },
            {
                semester: 'S17',
                courses: [
                    {id: 'CSE 3330-801', name: 'Database Concepts', type: 'Lecture'},
                    {id: 'CSE 3330-N12C', name: 'Database Concepts', type: 'Lab'},
                    {id: 'CSE 3339-801', name: 'Information Assurance & Security', type: 'Lecture'},
                    {id: 'CSE 3339-N13', name: 'Information Assurance & Security', type: 'Lab'},
                    {id: 'CSE 3353-001', name: 'Fundamentals of Algorythms', type: 'Lecture'},
                    {id: 'JAPN 1402-801', name: 'Beginning Japanese: 2nd Term', type: 'Lecture'},
                    {id: 'JAPN 1402-N10', name: 'Beginning Japanese: 2nd Term', type: 'Lab'},
                    {id: 'ANTH 3319-001', name: 'Humanity & Global Env Change', type: 'Lecture'}
                ]
            },
            {
                semester: 'F16',
                courses: [
                    {id: 'CSE 3330-801', name: 'Database Concepts', type: 'Lecture'},
                    {id: 'CSE 3330-N12C', name: 'Database Concepts', type: 'Lab'},
                    {id: 'CSE 3339-801', name: 'Information Assurance & Security', type: 'Lecture'},
                    {id: 'CSE 3339-N13', name: 'Information Assurance & Security', type: 'Lab'},
                    {id: 'CSE 3353-001', name: 'Fundamentals of Algorythms', type: 'Lecture'},
                    {id: 'JAPN 1402-801', name: 'Beginning Japanese: 2nd Term', type: 'Lecture'},
                    {id: 'JAPN 1402-N10', name: 'Beginning Japanese: 2nd Term', type: 'Lab'},
                    {id: 'ANTH 3319-001', name: 'Humanity & Global Env Change', type: 'Lecture'}
                ]
            },
            {
                semester: 'S16',
                courses: [
                    {id: 'CSE 3330-801', name: 'Database Concepts', type: 'Lecture'},
                    {id: 'CSE 3330-N12C', name: 'Database Concepts', type: 'Lab'},
                    {id: 'CSE 3339-801', name: 'Information Assurance & Security', type: 'Lecture'},
                    {id: 'CSE 3339-N13', name: 'Information Assurance & Security', type: 'Lab'},
                    {id: 'CSE 3353-001', name: 'Fundamentals of Algorythms', type: 'Lecture'},
                    {id: 'JAPN 1402-801', name: 'Beginning Japanese: 2nd Term', type: 'Lecture'},
                    {id: 'JAPN 1402-N10', name: 'Beginning Japanese: 2nd Term', type: 'Lab'},
                    {id: 'ANTH 3319-001', name: 'Humanity & Global Env Change', type: 'Lecture'}
                ]
            },
            {
                semester: 'F15',
                courses: [
                    {id: 'DISC 1313', name: 'Inquiry Seminar', type: 'Lecture'},
                    {id: 'KNW 2300-L01', name: 'Introduction to Engineering Design', type: 'Lab'},
                    {id: 'CSE 1341-801', name: 'Principles of Computer Science', type: 'Lecture'},
                    {id: 'MATH 1340-002', name: 'Consolidated Calculus', type: 'Lecture'},
                    {id: 'PHYS 1303-001', name: 'Introductory Mechanics', type: 'Lecture'},
                    {id: 'PHYS 1105-L17', name: 'Mechanics Laboratory', type: 'Lab'},
                    {id: 'PRW 1101-L01', name: 'PRW1: Concepts of Wellness', type: 'Lab'}
                ]
            },
          ]
        };
    }
}

