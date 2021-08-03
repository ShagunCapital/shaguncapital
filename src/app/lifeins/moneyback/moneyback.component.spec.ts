import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneybackComponent } from './moneyback.component';

describe('MoneybackComponent', () => {
  let component: MoneybackComponent;
  let fixture: ComponentFixture<MoneybackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoneybackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneybackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
