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
                    {id: 'CHEM 1303-001', name: 'General Chemistry', type: 'Lecture'},
                    {id: 'CHEM 1113-L07', name: 'General Chemistry Laboratory', type: 'Lab'},
                    {id: 'CSE 3342-002', name: 'Programming Languages', type: 'Lecture'},
                    {id: 'CSE 3345-801', name: 'Graphical User Interface', type: 'Lecture'},
                    {id: 'CSE 3381-801', name: 'Digital Logic Design', type: 'Lecture'},
                    {id: 'CSE 4340-001C', name: 'Stat Methods for Engineers', type: 'Lecture'},
                ]
            },
            {
                semester: 'S17',
                courses: [
                    {id: 'CSE 2341-801', name: 'Data Structures', type: 'Lecture'},
                    {id: 'CSE 2353-001', name: 'Discrete Comp Structures', type: 'Lecture'},
                    {id: 'CSE 3365-801C', name: 'Intro to Scientific Computing', type: 'Lecture'},
                    {id: 'PHYS 3305-001', name: 'Introduction to Modern Physics', type: 'Lecture'},
                    {id: 'PRW 2144-L01', name: 'PRW2: Scuba', type: 'Lab'}
                ]
            },
            {
                semester: 'F16',
                courses: [
                    {id: 'CSE 2341-801', name: 'Data Structures', type: 'Lecture'},
                    {id: 'JAPN 1401-801', name: 'Beginning Japanese', type: 'Lecture'},
                    {id: 'CSE 2240-801', name: 'Assy Lang Prog & Mach Org', type: 'Lecture'},
                    {id: 'PHYS 1304-001', name: 'Intro Electricity & Magnetism', type: 'Lecture'}
                ]
            },
            {
                semester: 'S16',
                courses: [
                    {id: 'CSE 1342-801', name: 'Programming Concepts', type: 'Lecture'},
                    {id: 'EMIS 1305-803', name: 'Computing Technology', type: 'Lecture'},
                    {id: 'PHYS 1304-002', name: 'Intro Electricity & Magnetism', type: 'Lecture'},
                    {id: 'PHYS 1106-L14', name: 'Electricity & Magnetism Lab', type: 'Lab'},
                    {id: 'MATH 3353-002', name: 'Introduction to Linear Algebra', type: 'lecture'}
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

