import { Routes } from '@angular/router';
import { SemestersComponent } from './semesters/semesters.component';
export const APP_ROUTES: Routes = [
    {path: 'SMU/:semester', component: SemestersComponent}
];
