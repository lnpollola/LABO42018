import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaHeladoComponent } from './busqueda-helado.component';

describe('BusquedaHeladoComponent', () => {
  let component: BusquedaHeladoComponent;
  let fixture: ComponentFixture<BusquedaHeladoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusquedaHeladoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedaHeladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
