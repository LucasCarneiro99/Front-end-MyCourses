import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhasSubmissoesComponent } from './minhas-submissoes.component';

describe('MinhasSubmissoesComponent', () => {
  let component: MinhasSubmissoesComponent;
  let fixture: ComponentFixture<MinhasSubmissoesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MinhasSubmissoesComponent]
    });
    fixture = TestBed.createComponent(MinhasSubmissoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
