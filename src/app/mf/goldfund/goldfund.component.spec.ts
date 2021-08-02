import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldfundComponent } from './goldfund.component';

describe('GoldfundComponent', () => {
  let component: GoldfundComponent;
  let fixture: ComponentFixture<GoldfundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoldfundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoldfundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
