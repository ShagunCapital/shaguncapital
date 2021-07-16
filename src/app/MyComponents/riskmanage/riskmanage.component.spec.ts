import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskmanageComponent } from './riskmanage.component';

describe('RiskmanageComponent', () => {
  let component: RiskmanageComponent;
  let fixture: ComponentFixture<RiskmanageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiskmanageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskmanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
