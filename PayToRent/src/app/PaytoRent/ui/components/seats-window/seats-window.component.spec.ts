import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatsWindowComponent } from './seats-window.component';

describe('SeatsWindowComponent', () => {
  let component: SeatsWindowComponent;
  let fixture: ComponentFixture<SeatsWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeatsWindowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeatsWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
