import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { CourseServiceService } from 'src/app/services/courseService/course-service.service';
import { CursoReprovadoComponent } from './curso-reprovado/curso-reprovado.component';
import { Observable, forkJoin, map } from 'rxjs';

@Component({
  selector: 'app-submissoes-professor',
  templateUrl: './submissoes-professor.component.html',
  styleUrls: ['./submissoes-professor.component.scss'],
})
export class SubmissoesProfessorComponent implements OnInit {
  constructor(
    private cursoService: CourseServiceService,
    private ngbModal: NgbModal
  ) {}
  cursosAprovados: any = [];
  arrayCursos: any = [];
  cursosnaoDisponiveis: any = [];
  matriculaUsuario: any;
  ngOnInit(): void {
    this.matriculaUsuario = this.cursoService.getItem('userMatricula');
    forkJoin([
      this.getCursosDisponiveis(),
      this.getCursosNaoDisponiveis(),
    ]).subscribe(([cursosDisponiveis, cursosNaoDisponiveis]) => {
      this.cursosAprovados = cursosDisponiveis;
      this.cursosnaoDisponiveis = cursosNaoDisponiveis;
      this.uniaoCursos();
    });
  }

  uniaoCursos() {
    this.arrayCursos = this.cursosAprovados.concat(
      this.cursosnaoDisponiveis.filter(
        (item: any) =>
          !this.cursosAprovados.some((obj: any) => obj.id == item.id)
      )
    );
  }

  getCursosDisponiveis(): Observable<any> {
    return this.cursoService.getCursos().pipe(
      map((dados: any) => {
        this.cursosAprovados = dados;
        this.cursosAprovados = this.cursosAprovados.map((d: any) => {
          switch (d.status) {
            case '0':
              d.situacao = 'Em aguardo';
              break;
            case '1':
              d.situacao = 'Aprovado';
              break;
            case '2':
              d.situacao = 'Recusado';
              break;
          }
          return d;
        });
        return dados; // Retornar os dados transformados
      })
    );
  }

  getCursosNaoDisponiveis(): Observable<any> {
    return this.cursoService.getCursosNaoDisponiveis().pipe(
      map((dados: any) => {
        this.cursosnaoDisponiveis = dados;
        this.cursosnaoDisponiveis = this.cursosnaoDisponiveis.map((d: any) => {
          switch (d.status) {
            case '0':
              d.situacao = 'Em aguardo';
              break;
            case '1':
              d.situacao = 'Aprovado';
              break;
            case '2':
              d.situacao = 'Recusado';
              break;
          }
          return d;
        });
        return dados; // Retornar os dados transformados
      })
    );
  }

  /*getCursosNaoDisponiveis() {
    this.cursoService.getCursosNaoDisponiveis().subscribe((dados: any) => {
      this.arrayCursos = dados;
      this.arrayCursos = this.arrayCursos.map((d: any) => {
        switch (d.status) {
          case '0':
            d.situacao = 'Em aguardo';
            break;
          case '1':
            d.situacao = 'Aprovado';
            break;
          case '2':
            d.situacao = 'Recusado';
            break;
        }
        return d;
      });

      console.log('imprimindo array', this.cursoService);
    });
  }*/
  cursoAprovado(body: any) {
    body.status = '1';
    console.log('imprimindo body', body);
    this.cursoService.putCursoAprovado(body).subscribe({
      next: (res: any) => {
        location.reload();
        console.log('curso aprovado');
      },
    });
  }

  cursoReprovado(id: any) {
    this.cursoService.invalidarCurso(id).subscribe({
      next: (d: any) => {
        location.reload();
      },
    });
    /*const options: NgbModalOptions = {
      centered: true,
      backdrop: 'static',
      size: 'lg',
    };
    this.ngbModal.open(
      CursoReprovadoComponent,
      options
    ).componentInstance.idCurso = id;*/
  }
}
