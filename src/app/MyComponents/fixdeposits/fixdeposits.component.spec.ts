import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixdepositsComponent } from './fixdeposits.component';

describe('FixdepositsComponent', () => {
  let component: FixdepositsComponent;
  let fixture: ComponentFixture<FixdepositsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FixdepositsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FixdepositsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
