import { Routes } from '@angular/router';
import { Accueil } from './pages/accueil/accueil';
import { APropos } from './pages/a-propos/a-propos';
import { NousContacter } from './pages/nous-contacter/nous-contacter';

export const routes: Routes = [
  { path: '', component: Accueil, title: 'Accueil' },
  { path: 'a-propos', component: APropos, title: 'À propos' },
  { path: 'nous-contacter', component: NousContacter, title: 'Nous contacter' }
];
