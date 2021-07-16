import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporatehealthComponent } from './corporatehealth.component';

describe('CorporatehealthComponent', () => {
  let component: CorporatehealthComponent;
  let fixture: ComponentFixture<CorporatehealthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorporatehealthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporatehealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
