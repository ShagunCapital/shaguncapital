import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsurancecalcComponent } from './insurancecalc.component';

describe('InsurancecalcComponent', () => {
  let component: InsurancecalcComponent;
  let fixture: ComponentFixture<InsurancecalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsurancecalcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsurancecalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
