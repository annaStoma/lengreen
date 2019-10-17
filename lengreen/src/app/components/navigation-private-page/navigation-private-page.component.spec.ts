import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationPrivatePageComponent } from './navigation-private-page.component';

describe('NavigationPrivatePageComponent', () => {
  let component: NavigationPrivatePageComponent;
  let fixture: ComponentFixture<NavigationPrivatePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationPrivatePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationPrivatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
