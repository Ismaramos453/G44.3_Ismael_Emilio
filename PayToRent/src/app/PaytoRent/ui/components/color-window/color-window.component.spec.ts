import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorWindowComponent } from './color-window.component';

describe('ColorWindowComponent', () => {
  let component: ColorWindowComponent;
  let fixture: ComponentFixture<ColorWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorWindowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
