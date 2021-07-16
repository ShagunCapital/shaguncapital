import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialplanComponent } from './financialplan.component';

describe('FinancialplanComponent', () => {
  let component: FinancialplanComponent;
  let fixture: ComponentFixture<FinancialplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancialplanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
