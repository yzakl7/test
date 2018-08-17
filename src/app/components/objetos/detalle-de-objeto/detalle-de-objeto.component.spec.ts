import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleDeObjetoComponent } from './detalle-de-objeto.component';

describe('DetalleDeObjetoComponent', () => {
  let component: DetalleDeObjetoComponent;
  let fixture: ComponentFixture<DetalleDeObjetoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleDeObjetoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleDeObjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
