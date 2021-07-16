import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiquidinvestComponent } from './liquidinvest.component';

describe('LiquidinvestComponent', () => {
  let component: LiquidinvestComponent;
  let fixture: ComponentFixture<LiquidinvestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiquidinvestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiquidinvestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
