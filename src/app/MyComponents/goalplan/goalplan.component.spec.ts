import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalplanComponent } from './goalplan.component';

describe('GoalplanComponent', () => {
  let component: GoalplanComponent;
  let fixture: ComponentFixture<GoalplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoalplanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
