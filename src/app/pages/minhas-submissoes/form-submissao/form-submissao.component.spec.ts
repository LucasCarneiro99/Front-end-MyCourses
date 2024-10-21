import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSubmissaoComponent } from './form-submissao.component';

describe('FormSubmissaoComponent', () => {
  let component: FormSubmissaoComponent;
  let fixture: ComponentFixture<FormSubmissaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormSubmissaoComponent]
    });
    fixture = TestBed.createComponent(FormSubmissaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
