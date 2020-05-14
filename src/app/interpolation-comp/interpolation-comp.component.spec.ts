import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpolationCompComponent } from './interpolation-comp.component';

describe('InterpolationCompComponent', () => {
  let component: InterpolationCompComponent;
  let fixture: ComponentFixture<InterpolationCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterpolationCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterpolationCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
