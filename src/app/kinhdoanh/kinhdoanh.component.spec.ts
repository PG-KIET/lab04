import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KinhdoanhComponent } from './kinhdoanh.component';

describe('KinhdoanhComponent', () => {
  let component: KinhdoanhComponent;
  let fixture: ComponentFixture<KinhdoanhComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KinhdoanhComponent]
    });
    fixture = TestBed.createComponent(KinhdoanhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
