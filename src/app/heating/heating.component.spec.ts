import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeatingComponent } from './heating.component';

describe('HeatingComponent', () => {
  let component: HeatingComponent;
  let fixture: ComponentFixture<HeatingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeatingComponent]
    });
    fixture = TestBed.createComponent(HeatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
