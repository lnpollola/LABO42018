import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PPTijeraComponent } from './pptijera.component';

describe('PptijeraComponent', () => {
  let component: PPTijeraComponent;
  let fixture: ComponentFixture<PPTijeraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PPTijeraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PPTijeraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
