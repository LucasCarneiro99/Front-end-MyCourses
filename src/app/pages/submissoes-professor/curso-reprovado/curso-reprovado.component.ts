import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CourseServiceService } from 'src/app/services/course-service.service';

@Component({
  selector: 'app-curso-reprovado',
  templateUrl: './curso-reprovado.component.html',
  styleUrls: ['./curso-reprovado.component.scss'],
})
export class CursoReprovadoComponent {
  idCurso: any;
  form: FormGroup;
  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private cursoService: CourseServiceService
  ) {
    this.form = this.fb.group({
      descProfessor: null,
    });
  }

  sendForm() {
    this.cursoService.invalidarCurso(this.idCurso).subscribe({
      next: (d: any) => {
        location.reload();
      },
    });
  }
}
