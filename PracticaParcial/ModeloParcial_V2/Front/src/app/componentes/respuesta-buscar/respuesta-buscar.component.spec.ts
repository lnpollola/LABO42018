import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RespuestaBuscarComponent } from './respuesta-buscar.component';

describe('RespuestaBuscarComponent', () => {
  let component: RespuestaBuscarComponent;
  let fixture: ComponentFixture<RespuestaBuscarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RespuestaBuscarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RespuestaBuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
