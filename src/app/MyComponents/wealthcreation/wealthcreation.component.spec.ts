import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WealthcreationComponent } from './wealthcreation.component';

describe('WealthcreationComponent', () => {
  let component: WealthcreationComponent;
  let fixture: ComponentFixture<WealthcreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WealthcreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WealthcreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
