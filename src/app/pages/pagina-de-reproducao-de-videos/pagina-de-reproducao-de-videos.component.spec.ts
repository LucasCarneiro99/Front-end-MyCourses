import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaDeReproducaoDeVideosComponent } from './pagina-de-reproducao-de-videos.component';

describe('PaginaDeReproducaoDeVideosComponent', () => {
  let component: PaginaDeReproducaoDeVideosComponent;
  let fixture: ComponentFixture<PaginaDeReproducaoDeVideosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginaDeReproducaoDeVideosComponent]
    });
    fixture = TestBed.createComponent(PaginaDeReproducaoDeVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
