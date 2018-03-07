import { Routes } from '@angular/router';
import { SemestersComponent } from './semesters/semesters.component';
import { JapaneseStudyComponent } from './japanese-study/japanese-study.component';
import { HomeComponent } from './home/home.component';
import { VocabMainComponent } from './vocab-main/vocab-main.component';
export const APP_ROUTES: Routes = [
    {path: 'SMU/:semester', component: SemestersComponent},
    {path: 'Japanese', component: JapaneseStudyComponent },
    {path: '', component: HomeComponent },
    {path: 'Japanese/vocab', component: VocabMainComponent}
];
