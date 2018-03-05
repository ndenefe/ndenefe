import { Routes } from '@angular/router';
import { SemestersComponent } from './semesters/semesters.component';
import { JapaneseStudyComponent } from './japanese-study/japanese-study.component';
export const APP_ROUTES: Routes = [
    {path: 'SMU/:semester', component: SemestersComponent},
    {path: 'Japanese', component: JapaneseStudyComponent }
];
