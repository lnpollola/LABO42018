import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarMascotaComponent } from './borrar-mascota.component';

describe('BorrarMascotaComponent', () => {
  let component: BorrarMascotaComponent;
  let fixture: ComponentFixture<BorrarMascotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrarMascotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarMascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
