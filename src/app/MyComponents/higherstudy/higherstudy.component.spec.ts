import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HigherstudyComponent } from './higherstudy.component';

describe('HigherstudyComponent', () => {
  let component: HigherstudyComponent;
  let fixture: ComponentFixture<HigherstudyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HigherstudyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HigherstudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
