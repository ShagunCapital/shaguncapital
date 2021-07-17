import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SipcalcComponent } from './sipcalc.component';

describe('SipcalcComponent', () => {
  let component: SipcalcComponent;
  let fixture: ComponentFixture<SipcalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SipcalcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SipcalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
