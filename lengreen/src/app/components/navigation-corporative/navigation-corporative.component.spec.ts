import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationCorporativeComponent } from './navigation-corporative.component';

describe('NavigationCorporativeComponent', () => {
  let component: NavigationCorporativeComponent;
  let fixture: ComponentFixture<NavigationCorporativeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationCorporativeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationCorporativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
