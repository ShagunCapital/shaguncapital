import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlinetransactComponent } from './onlinetransact.component';

describe('OnlinetransactComponent', () => {
  let component: OnlinetransactComponent;
  let fixture: ComponentFixture<OnlinetransactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlinetransactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlinetransactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
