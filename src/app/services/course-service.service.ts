import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CourseServiceService {
  private readonly API = 'api';
  public loginEvent: EventEmitter<any> = new EventEmitter<any>();
  public logoutEvent: EventEmitter<any> = new EventEmitter<any>();

  HTTP_OPTIONS = {
    headers: new HttpHeaders({
      //'Content-Type': 'application/json',
      Autorization: `Bearer ${localStorage.getItem('token')}`,
    }),
  };

  constructor(private httpClient: HttpClient) {}

  login(form: any) {
    const URL = `${this.API}/auth/login`;
    return this.httpClient.post<any>(URL, form).pipe(take(1));
  }

  getCursos() {
    const URL = `${this.API}/course`;
    return this.httpClient.get(URL).pipe(take(1));
  }

  //localStorage
  setItem(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getItem<T>(key: string): T | null {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : null;
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  postCurso(form: any) {
    const URL = `${this.API}/course`;
    return this.httpClient
      .post<any>(URL, form, this.HTTP_OPTIONS)
      .pipe(take(1));
  }

  deletarCurso(id: any) {
    const URL = `${this.API}/course/delete/${id}`;
    return this.httpClient.delete(URL, this.HTTP_OPTIONS).pipe(take(1));
  }

  invalidarCurso(id: any) {
    const URL = `${this.API}/course/${id}`;
    return this.httpClient.delete(URL, this.HTTP_OPTIONS).pipe(take(1));
  }

  editarCurso(form: any) {
    const URL = `${this.API}/course`;
    return this.httpClient.put(URL, form, { ...this.HTTP_OPTIONS });
  }

  getCursosUsuarioEspecifico() {
    let id = this.getItem('userMatricula');
    const URL = `${this.API}/user/${id}`;
    return this.httpClient.get(URL, { ...this.HTTP_OPTIONS }).pipe(take(1));
  }

  getCursosNaoDisponiveis() {
    const URL = `${this.API}/adm`;
    return this.httpClient.get(URL).pipe(take(1));
  }

  putCursoAprovado(body: any) {
    let cursoId = body.id;
    const URL = `${this.API}/adm/${cursoId}`;
    return this.httpClient.put(URL, body, { ...this.HTTP_OPTIONS });
  }

  loginSuccessful(role: any) {
    if (role == 'USER') {
      this.loginEvent.emit(0); //aluno
    } else {
      this.loginEvent.emit(1); //professor
    }
  }

  logoutSucessful() {
    this.logoutEvent.emit(null);
  }
}
