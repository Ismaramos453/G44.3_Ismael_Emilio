import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilVendedorComponent } from './perfil-vendedor.component';

describe('PerfilVendedorComponent', () => {
  let component: PerfilVendedorComponent;
  let fixture: ComponentFixture<PerfilVendedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilVendedorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilVendedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
