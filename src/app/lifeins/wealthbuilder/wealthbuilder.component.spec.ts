import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WealthbuilderComponent } from './wealthbuilder.component';

describe('WealthbuilderComponent', () => {
  let component: WealthbuilderComponent;
  let fixture: ComponentFixture<WealthbuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WealthbuilderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WealthbuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
