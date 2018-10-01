import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PPTijeraMasListadoComponent } from './pptijera-mas-listado.component';

describe('PptijeraMasListadoComponent', () => {
  let component: PPTijeraMasListadoComponent;
  let fixture: ComponentFixture<PPTijeraMasListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PPTijeraMasListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PPTijeraMasListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
