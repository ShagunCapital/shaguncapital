import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentmanageComponent } from './investmentmanage.component';

describe('InvestmentmanageComponent', () => {
  let component: InvestmentmanageComponent;
  let fixture: ComponentFixture<InvestmentmanageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestmentmanageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentmanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
