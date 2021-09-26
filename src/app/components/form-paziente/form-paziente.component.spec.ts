import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPazienteComponent } from './form-paziente.component';

describe('FormPazienteComponent', () => {
  let component: FormPazienteComponent;
  let fixture: ComponentFixture<FormPazienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPazienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPazienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
