import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularpayComponent } from './regularpay.component';

describe('RegularpayComponent', () => {
  let component: RegularpayComponent;
  let fixture: ComponentFixture<RegularpayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegularpayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegularpayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
