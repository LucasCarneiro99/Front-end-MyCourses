import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { PaginaInicialComponent } from './pages/pagina-inicial/pagina-inicial.component';
import { PaginaDeReproducaoDeVideosComponent } from './pages/pagina-de-reproducao-de-videos/pagina-de-reproducao-de-videos.component';
import { MinhasSubmissoesComponent } from './pages/minhas-submissoes/minhas-submissoes.component';
import { AvaliarSubmissoesComponent } from './pages/avaliar-submissoes/avaliar-submissoes.component';
import { SubmissoesProfessorComponent } from './pages/submissoes-professor/submissoes-professor.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: PaginaInicialComponent },
  { path: 'video', component: PaginaDeReproducaoDeVideosComponent },
  { path: 'minhas-submissoes', component: MinhasSubmissoesComponent },
  { path: 'avaliar-submissoes', component: AvaliarSubmissoesComponent },
  { path: 'submissoes', component: SubmissoesProfessorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
