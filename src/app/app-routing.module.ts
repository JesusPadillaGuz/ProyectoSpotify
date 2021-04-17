import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtistaComponent } from './components/artista/artista.component';


export const routes: Routes = [
{path: 'home', component: HomeComponent},
{path: 'search', component: SearchComponent},
{path: 'artist/:id', component: ArtistaComponent},
{path: '', pathMatch: 'full', redirectTo: 'home'},
{path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
