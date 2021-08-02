import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DreamHouseFundComponent } from './dream-house-fund.component';

describe('DreamHouseFundComponent', () => {
  let component: DreamHouseFundComponent;
  let fixture: ComponentFixture<DreamHouseFundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DreamHouseFundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DreamHouseFundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
