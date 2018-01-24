import { Observable } from 'rxjs';
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class MockApi implements InMemoryDbService {
    createDb(): any {
        return {
          semesters: [
            {
                semester: 'S18', 
                courses: [
                {id:'CSE 3330-801', name: 'Database Concepts', type: 'Lecture'},
                {id:'CSE 3330-N12C', name: 'Database Concepts', type: 'Lab'},
                {id:'CSE 3339-801', name: 'Information Assurance and Security', type: 'Lecture'},
                {id:'CSE 3339-N13', name: 'Information Assurance and Security', type: 'Lab'},
                {id:'CSE 3353-001', name: 'Fundamentals of Algorythms', type: 'Lecture'},
                {id:'JAPN 1402-801', name: 'Beginning Japanese: 2nd Term', type: 'Lecture'},
                {id:'JAPN 1402-N10', name: 'Beginning Japanese: 2nd Term', type: 'Lab'},
                ]
            },
            {
                semester: 'S17', 
                courses: [
                {id:'TEST-801', name: 'testing', type: 'Lecture'},
                {id:'TEST-N11', name: 'testing', type: 'Lab'},
                ]
            },
          ]
        };
    }
}

