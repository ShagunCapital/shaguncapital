import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketLinkedComponent } from './market-linked.component';

describe('MarketLinkedComponent', () => {
  let component: MarketLinkedComponent;
  let fixture: ComponentFixture<MarketLinkedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketLinkedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketLinkedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
