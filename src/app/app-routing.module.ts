import { CharactersComponent } from './features/characters/characters.component';
import { LinksComponent } from './features/links/links.component';
import { TeamComponent } from './team/team.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'characters'
  },
  {
    path: 'characters',
    component: CharactersComponent
  },
  {
    path: 'team',
    component: TeamComponent
  },
  {
    path: 'links',
    component: LinksComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
