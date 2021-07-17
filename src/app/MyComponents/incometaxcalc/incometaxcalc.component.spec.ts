import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncometaxcalcComponent } from './incometaxcalc.component';

describe('IncometaxcalcComponent', () => {
  let component: IncometaxcalcComponent;
  let fixture: ComponentFixture<IncometaxcalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncometaxcalcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncometaxcalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
