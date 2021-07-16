import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxsavinglifeComponent } from './taxsavinglife.component';

describe('TaxsavinglifeComponent', () => {
  let component: TaxsavinglifeComponent;
  let fixture: ComponentFixture<TaxsavinglifeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxsavinglifeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxsavinglifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
