import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentnameComponent } from './studentname.component';

describe('StudentnameComponent', () => {
  let component: StudentnameComponent;
  let fixture: ComponentFixture<StudentnameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentnameComponent]
    });
    fixture = TestBed.createComponent(StudentnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
