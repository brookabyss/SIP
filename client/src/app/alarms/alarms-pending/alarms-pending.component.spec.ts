import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlarmsPendingComponent } from './alarms-pending.component';

describe('AlarmsPendingComponent', () => {
  let component: AlarmsPendingComponent;
  let fixture: ComponentFixture<AlarmsPendingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlarmsPendingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlarmsPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
