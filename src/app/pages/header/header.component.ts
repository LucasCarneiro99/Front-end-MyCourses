import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseServiceService } from 'src/app/services/course-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isCollapsed: boolean = true;
  possuiToken: any;
  alunoOuProfessor: any = null;
  isLoggedIn: Boolean = false;

  ngOnInit(): void {
    this.possuiToken = this.cursoService.getItem('token');
    this.alunoOuProfessor = this.cursoService.getItem('role');
    this.cursoService.loginEvent.subscribe((loggedIn: any) => {
      console.log("evento chegando no header", loggedIn)
      this.isLoggedIn=true
      this.alunoOuProfessor = loggedIn;
     });
    // this.cursoService.logoutEvent.subscribe;
  }

  constructor(
    private router: Router,
    private cursoService: CourseServiceService
  ) {}

  toggleNavbar() {
    this.isCollapsed = !this.isCollapsed;
  }

  minhasSubm() {
    this.router.navigate(['/minhas-submissoes']);
  }

  redirecionarHome() {
    console.log('chegou aqui');
    this.router.navigate(['/home']);
  }

  sairAplicacao() {
    this.isLoggedIn = false
    this.cursoService.removeItem('token');
    this.cursoService.logoutSucessful();
    this.router.navigate(['/login']);
  }

  submissoesProfessor() {
    this.router.navigate(['/submissoes']);
  }
}
