import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DettaglioPasswordComponent} from './dettaglio-password.component';

describe('DettaglioPasswordComponent', () => {
  let component: DettaglioPasswordComponent;
  let fixture: ComponentFixture<DettaglioPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DettaglioPasswordComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DettaglioPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
