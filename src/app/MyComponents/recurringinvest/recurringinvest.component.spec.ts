import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecurringinvestComponent } from './recurringinvest.component';

describe('RecurringinvestComponent', () => {
  let component: RecurringinvestComponent;
  let fixture: ComponentFixture<RecurringinvestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecurringinvestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecurringinvestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
