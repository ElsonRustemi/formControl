import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormChiusuraPianoComponent } from './form-chiusura-piano.component';

describe('FormChiusuraPianoComponent', () => {
  let component: FormChiusuraPianoComponent;
  let fixture: ComponentFixture<FormChiusuraPianoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormChiusuraPianoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormChiusuraPianoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
