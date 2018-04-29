import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlarmsDispatchComponent } from './alarms-dispatch.component';

describe('AlarmsDispatchComponent', () => {
  let component: AlarmsDispatchComponent;
  let fixture: ComponentFixture<AlarmsDispatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlarmsDispatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlarmsDispatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
