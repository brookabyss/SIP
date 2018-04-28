import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitesSingleDetailComponent } from './sites-single-detail.component';

describe('SitesSingleDetailComponent', () => {
  let component: SitesSingleDetailComponent;
  let fixture: ComponentFixture<SitesSingleDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitesSingleDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitesSingleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
