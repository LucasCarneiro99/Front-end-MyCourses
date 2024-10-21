import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissoesProfessorComponent } from './submissoes-professor.component';

describe('SubmissoesProfessorComponent', () => {
  let component: SubmissoesProfessorComponent;
  let fixture: ComponentFixture<SubmissoesProfessorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubmissoesProfessorComponent]
    });
    fixture = TestBed.createComponent(SubmissoesProfessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
