import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalsipcalcComponent } from './goalsipcalc.component';

describe('GoalsipcalcComponent', () => {
  let component: GoalsipcalcComponent;
  let fixture: ComponentFixture<GoalsipcalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoalsipcalcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalsipcalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
