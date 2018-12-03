import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPlanoComponent } from './edit-plano.component';

describe('EditPlanoComponent', () => {
  let component: EditPlanoComponent;
  let fixture: ComponentFixture<EditPlanoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPlanoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPlanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
