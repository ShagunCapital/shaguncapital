import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthinsComponent } from './healthins.component';

describe('HealthinsComponent', () => {
  let component: HealthinsComponent;
  let fixture: ComponentFixture<HealthinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthinsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
