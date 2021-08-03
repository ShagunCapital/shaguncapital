import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriticalcareComponent } from './criticalcare.component';

describe('CriticalcareComponent', () => {
  let component: CriticalcareComponent;
  let fixture: ComponentFixture<CriticalcareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriticalcareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriticalcareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
