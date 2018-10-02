import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaMascotaComponent } from './busqueda-mascota.component';

describe('BusquedaMascotaComponent', () => {
  let component: BusquedaMascotaComponent;
  let fixture: ComponentFixture<BusquedaMascotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusquedaMascotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedaMascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
