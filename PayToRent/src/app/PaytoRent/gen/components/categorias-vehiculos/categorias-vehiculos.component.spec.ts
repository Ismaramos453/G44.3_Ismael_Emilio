import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriasVehiculosComponent } from './categorias-vehiculos.component';

describe('CategoriasVehiculosComponent', () => {
  let component: CategoriasVehiculosComponent;
  let fixture: ComponentFixture<CategoriasVehiculosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriasVehiculosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriasVehiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
