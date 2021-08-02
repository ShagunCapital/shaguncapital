import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PensionfundComponent } from './pensionfund.component';

describe('PensionfundComponent', () => {
  let component: PensionfundComponent;
  let fixture: ComponentFixture<PensionfundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PensionfundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PensionfundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
