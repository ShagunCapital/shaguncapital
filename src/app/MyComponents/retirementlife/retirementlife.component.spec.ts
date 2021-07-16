import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetirementlifeComponent } from './retirementlife.component';

describe('RetirementlifeComponent', () => {
  let component: RetirementlifeComponent;
  let fixture: ComponentFixture<RetirementlifeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetirementlifeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetirementlifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
