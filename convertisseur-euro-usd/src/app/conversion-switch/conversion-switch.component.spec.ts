import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversionSwitchComponent } from './conversion-switch.component';

describe('ConversionSwitchComponent', () => {
  let component: ConversionSwitchComponent;
  let fixture: ComponentFixture<ConversionSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConversionSwitchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConversionSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
