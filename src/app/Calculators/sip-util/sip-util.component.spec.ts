import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SipUtilComponent } from './sip-util.component';

describe('SipUtilComponent', () => {
  let component: SipUtilComponent;
  let fixture: ComponentFixture<SipUtilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SipUtilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SipUtilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
