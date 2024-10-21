import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliarSubmissoesComponent } from './avaliar-submissoes.component';

describe('AvaliarSubmissoesComponent', () => {
  let component: AvaliarSubmissoesComponent;
  let fixture: ComponentFixture<AvaliarSubmissoesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvaliarSubmissoesComponent]
    });
    fixture = TestBed.createComponent(AvaliarSubmissoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
