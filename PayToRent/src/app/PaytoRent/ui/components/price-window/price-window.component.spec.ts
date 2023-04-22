import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceWindowComponent } from './price-window.component';

describe('PriceWindowComponent', () => {
  let component: PriceWindowComponent;
  let fixture: ComponentFixture<PriceWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriceWindowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PriceWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
