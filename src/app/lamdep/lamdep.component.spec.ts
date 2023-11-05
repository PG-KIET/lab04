import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LamdepComponent } from './lamdep.component';

describe('LamdepComponent', () => {
  let component: LamdepComponent;
  let fixture: ComponentFixture<LamdepComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LamdepComponent]
    });
    fixture = TestBed.createComponent(LamdepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
