import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarPlanoComponent } from './consultar-plano.component';

describe('ConsultarPlanoComponent', () => {
  let component: ConsultarPlanoComponent;
  let fixture: ComponentFixture<ConsultarPlanoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultarPlanoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarPlanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
