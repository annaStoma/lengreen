import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateClientsPageComponent } from './private-clients-page.component';

describe('PrivateClientsPageComponent', () => {
  let component: PrivateClientsPageComponent;
  let fixture: ComponentFixture<PrivateClientsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateClientsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateClientsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
