import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnautherizedUserComponent } from './unautherized-user.component';

describe('UnautherizedUserComponent', () => {
  let component: UnautherizedUserComponent;
  let fixture: ComponentFixture<UnautherizedUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnautherizedUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnautherizedUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
