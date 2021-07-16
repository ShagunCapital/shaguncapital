import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiquiditysolComponent } from './liquiditysol.component';

describe('LiquiditysolComponent', () => {
  let component: LiquiditysolComponent;
  let fixture: ComponentFixture<LiquiditysolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiquiditysolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiquiditysolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
