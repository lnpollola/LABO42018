import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarMascotaComponent } from './mostrar-mascota.component';

describe('MostrarMascotaComponent', () => {
  let component: MostrarMascotaComponent;
  let fixture: ComponentFixture<MostrarMascotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarMascotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarMascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
