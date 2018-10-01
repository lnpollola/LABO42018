import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PptijeraComponent } from './pptijera.component';

describe('PptijeraComponent', () => {
  let component: PptijeraComponent;
  let fixture: ComponentFixture<PptijeraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PptijeraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PptijeraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
