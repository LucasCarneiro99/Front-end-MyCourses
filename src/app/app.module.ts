import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaInicialComponent } from './pages/pagina-inicial/pagina-inicial.component';
import { PaginaDeReproducaoDeVideosComponent } from './pages/pagina-de-reproducao-de-videos/pagina-de-reproducao-de-videos.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { CommonModule } from '@angular/common';
import { MinhasSubmissoesComponent } from './pages/minhas-submissoes/minhas-submissoes.component';
import { AvaliarSubmissoesComponent } from './pages/avaliar-submissoes/avaliar-submissoes.component';
import { HeaderComponent } from './pages/header/header.component';
import { FormSubmissaoComponent } from './pages/minhas-submissoes/form-submissao/form-submissao.component';
import { NgbModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { SubmissoesProfessorComponent } from './pages/submissoes-professor/submissoes-professor.component';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { CursoReprovadoComponent } from './pages/submissoes-professor/curso-reprovado/curso-reprovado.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaDeReproducaoDeVideosComponent,
    LoginComponent,
    PaginaInicialComponent,
    MinhasSubmissoesComponent,
    AvaliarSubmissoesComponent,
    HeaderComponent,
    FormSubmissaoComponent,
    SubmissoesProfessorComponent,
    CursoReprovadoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
