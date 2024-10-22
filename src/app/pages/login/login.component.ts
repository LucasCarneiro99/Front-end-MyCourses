import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CourseServiceService } from 'src/app/services/course-service.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup = this.fb.group({
    login: ['', Validators.required],
    senha: ['', Validators.required],
  });
  mensagemLogin: String = '';

  constructor(
    private router: Router,
    private cursoService: CourseServiceService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.cursoService.getItem('token') ? this.login() : '';
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      login: null,
      password: null,
    });
  }

  login() {
    this.mensagemLogin = '';
    console.log('A função de login foi chamada.', this.form); // Exemplo de mensagem de log
    this.cursoService.login(this.form.value).subscribe({
      next: (res: any) => {
        console.log("Imprimindo a res do back", res)
        if (res != null) {
          this.cursoService.setItem('token', res.token);
          this.cursoService.setItem('userMatricula', this.form.value.login);
          this.cursoService.setItem('role', res.role);
          this.cursoService.loginSuccessful(res.role);
          this.router.navigate(['/home']);
        } else {
        }
      },
      error: () => {
        console.log('login invalido');
        this.mensagemLogin = 'Usuario ou senha incorreto';
      },
    });
  }
}
