import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioserviceComponent } from './portfolioservice.component';

describe('PortfolioserviceComponent', () => {
  let component: PortfolioserviceComponent;
  let fixture: ComponentFixture<PortfolioserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioserviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
