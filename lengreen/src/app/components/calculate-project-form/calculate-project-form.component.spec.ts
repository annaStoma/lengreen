import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateProjectFormComponent } from './calculate-project-form.component';

describe('CalculateProjectFormComponent', () => {
  let component: CalculateProjectFormComponent;
  let fixture: ComponentFixture<CalculateProjectFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculateProjectFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculateProjectFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
