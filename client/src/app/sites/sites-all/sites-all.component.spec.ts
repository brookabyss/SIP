import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitesAllComponent } from './sites-all.component';

describe('SitesAllComponent', () => {
  let component: SitesAllComponent;
  let fixture: ComponentFixture<SitesAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitesAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitesAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
