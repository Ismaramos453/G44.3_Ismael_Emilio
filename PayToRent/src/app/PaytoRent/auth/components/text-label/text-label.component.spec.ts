import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextLabelComponent } from './text-label.component';

describe('TextLabelComponent', () => {
  let component: TextLabelComponent;
  let fixture: ComponentFixture<TextLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextLabelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
