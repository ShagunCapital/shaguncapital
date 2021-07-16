import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceplanComponent } from './insuranceplan.component';

describe('InsuranceplanComponent', () => {
  let component: InsuranceplanComponent;
  let fixture: ComponentFixture<InsuranceplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsuranceplanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
