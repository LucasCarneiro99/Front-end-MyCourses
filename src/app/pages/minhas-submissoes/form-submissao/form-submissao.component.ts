import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CourseServiceService } from 'src/app/services/courseService/course-service.service';

@Component({
  selector: 'app-form-submissao',
  templateUrl: './form-submissao.component.html',
  styleUrls: ['./form-submissao.component.scss'],
})
export class FormSubmissaoComponent implements OnInit {
  form: FormGroup;
  formularioExistente: any;
  constructor(
    private fb: FormBuilder,
    private cursoService: CourseServiceService,
    public activeModal: NgbActiveModal
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      userMatricula: this.cursoService.getItem('userMatricula'),
      description: ['', Validators.required],
      imageUrl: '',
      role: 'USER',
      videoUrl: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.formularioExistente ? this.cloneForm() : '';
  }

  cloneForm() {
    this.form.patchValue({
      name: this.formularioExistente.name,
      userMatricula: this.cursoService.getItem('userMatricula'),
      description: this.formularioExistente.description,
      imageUrl: '',
      role: 'USER',
      videoUrl: this.formularioExistente.videoUrl,
    });
  }

  edicaoDeCurso() {
    this.form = this.fb.group({
      ...this.form.value,
      id: this.formularioExistente.id,
      descProfessor: this.formularioExistente.descProfessor,
      status: '0',
    });
    console.log('formulario depois do patch value', this.form.value);
    this.cursoService.editarCurso(this.form.value).subscribe({
      next: (res: any) => {
        console.log('curso postado com sucesso');
        location.reload();
      },
      error: () => {
        console.log('erro');
      },
    });
  }

  cursoNovo() {
    this.cursoService.postCurso(this.form.value).subscribe({
      next: (res: any) => {
        console.log('curso postado com sucesso');
        location.reload();
      },
      error: () => {
        console.log('erro');
      },
    });
  }

  sendForm() {
    this.formularioExistente ? this.edicaoDeCurso() : this.cursoNovo();
  }
}
