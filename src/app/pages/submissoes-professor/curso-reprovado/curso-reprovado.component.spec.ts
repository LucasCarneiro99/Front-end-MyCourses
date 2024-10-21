import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoReprovadoComponent } from './curso-reprovado.component';

describe('CursoReprovadoComponent', () => {
  let component: CursoReprovadoComponent;
  let fixture: ComponentFixture<CursoReprovadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CursoReprovadoComponent]
    });
    fixture = TestBed.createComponent(CursoReprovadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
