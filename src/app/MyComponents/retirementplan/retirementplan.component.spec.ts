import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetirementplanComponent } from './retirementplan.component';

describe('RetirementplanComponent', () => {
  let component: RetirementplanComponent;
  let fixture: ComponentFixture<RetirementplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetirementplanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetirementplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
