import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PianodicuraformComponent } from './pianodicuraform.component';

describe('PianodicuraformComponent', () => {
  let component: PianodicuraformComponent;
  let fixture: ComponentFixture<PianodicuraformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PianodicuraformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PianodicuraformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
