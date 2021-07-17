import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InflationcalcComponent } from './inflationcalc.component';

describe('InflationcalcComponent', () => {
  let component: InflationcalcComponent;
  let fixture: ComponentFixture<InflationcalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InflationcalcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InflationcalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
