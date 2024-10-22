import { Component, OnInit } from '@angular/core';
import { NgbModalOptions, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormSubmissaoComponent } from './form-submissao/form-submissao.component';
import '@angular/compiler';
import { Observable, forkJoin, map } from 'rxjs';
import { CourseServiceService } from 'src/app/services/courseService/course-service.service';

@Component({
  selector: 'app-minhas-submissoes',
  templateUrl: './minhas-submissoes.component.html',
  styleUrls: ['./minhas-submissoes.component.scss'],
})
export class MinhasSubmissoesComponent implements OnInit {
  constructor(
    private ngbModal: NgbModal,
    private cursoService: CourseServiceService
  ) {}
  cursosDisponiveis: any;
  arrayCursos: any = [];
  cursosAprovadosUsuario: any = [];
  cursosNaoAprovadosUsuario: any = [];
  matriculaUsuario: any;
  arrayGeralCursos: any = [];
  ngOnInit(): void {
    this.matriculaUsuario = this.cursoService.getItem('userMatricula');
    forkJoin([
      this.getCursosDisponiveis(),
      this.getCursosNaoDisponiveis(),
    ]).subscribe(([cursosDisponiveis, cursosNaoDisponiveis]) => {
      this.cursosAprovadosUsuario = cursosDisponiveis;
      this.cursosNaoAprovadosUsuario = cursosNaoDisponiveis;
      this.uniaoCursos();
    });
    console.log("array geral cursos ", this.arrayGeralCursos)
  }

  uniaoCursos() {
    this.arrayGeralCursos = this.cursosAprovadosUsuario.concat(
      this.cursosNaoAprovadosUsuario.filter(
        (item: any) =>
          !this.cursosAprovadosUsuario.some((obj: any) => obj.id == item.id)
      )
    );
    console.log("array geral cursos ", this.arrayGeralCursos)

  }

  getCursosDisponiveis(): Observable<any> {
    return this.cursoService.getCursosUsuarioEspecifico().pipe(
      map((dados: any) => {
        console.log("DADOS ", dados)
        this.cursosAprovadosUsuario = dados;
        this.cursosAprovadosUsuario = this.cursosAprovadosUsuario.map(
          (d: any) => {
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
          }
        );
        console.log('imprimindo array', this.cursosAprovadosUsuario);
        return dados; // Retornar os dados transformados
      })
    );
  }

  getCursosNaoDisponiveis(): Observable<any> {
    return this.cursoService.getCursosNaoDisponiveis().pipe(
      map((dados: any) => {
        console.log("DADOS getcursosNaoDisponiveis", dados)

        this.arrayCursos = dados;
        console.log("matricula do usuario", this.matriculaUsuario);
        this.cursosNaoAprovadosUsuario = this.arrayCursos.filter(
          (objeto: any) => {
            return objeto.userMatricula.includes(this.matriculaUsuario);
          }
        );
        console.log("array apos filtro", this.cursosNaoAprovadosUsuario)
        this.cursosNaoAprovadosUsuario = this.cursosNaoAprovadosUsuario.map(
          (d: any) => {
            switch (d.status) {
              case '0':
                d.situacao = 'Em aguardo';
                break;
              case '1':
                d.situacao = 'Aprovado';
                break;
              case '2':
                console.log("ENTROU NO CASO 2")
                d.situacao = 'Recusado';
                break;
            }
            return d;
          }
        );
        console.log('imprimindo array', this.cursosNaoAprovadosUsuario);
        return dados; // Retornar os dados transformados
      })
    );
  }

  abrirModal(corpo?: any) {
    const options: NgbModalOptions = {
      centered: true,
      backdrop: 'static',
      size: 'lg',
    };
    corpo
      ? (this.ngbModal.open(
          FormSubmissaoComponent,
          options
        ).componentInstance.formularioExistente = corpo)
      : this.ngbModal.open(FormSubmissaoComponent, options);
  }

  apagarCurso(id: any) {
    this.cursoService.deletarCurso(id).subscribe({
      next: (d: any) => {
        console.log('curso deletado');
        location.reload();
      },
    });
  }
  /*openForm() {
    const options: NgbModalOptions = {
      animation: true,
      centered: true,
      backdrop: 'static',
      size: 'lg',
    };
    this.ngbModal.open(FormSubmissaoComponent, options);
  }*/
}
