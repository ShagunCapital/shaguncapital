import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GolddepositsComponent } from './golddeposits.component';

describe('GolddepositsComponent', () => {
  let component: GolddepositsComponent;
  let fixture: ComponentFixture<GolddepositsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GolddepositsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GolddepositsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
