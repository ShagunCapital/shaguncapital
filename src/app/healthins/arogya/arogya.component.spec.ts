import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArogyaComponent } from './arogya.component';

describe('ArogyaComponent', () => {
  let component: ArogyaComponent;
  let fixture: ComponentFixture<ArogyaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArogyaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArogyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
