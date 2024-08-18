import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { AboutComponent } from './components/about/about.component';
import { CompetitionSoftwareComponent } from './components/competition-software/competition-software.component';
import { WordNinjaComponent } from './components/word-ninja/word-ninja.component';
import { WordPyramidsComponent } from './components/word-pyramids/word-pyramids.component';

export const routes: Routes = [
  { title: '', path: '', component: MainComponent },
  { title: 'About', path: 'about', component: AboutComponent },
  {
    title: 'Jury - Competition Software',
    path: 'competition-software',
    component: CompetitionSoftwareComponent,
  },
  { title: 'Word Ninja', path: 'word-ninja', component: WordNinjaComponent },
  {
    title: 'Word Pyramids',
    path: 'word-pyramids',
    component: WordPyramidsComponent,
  },
];
