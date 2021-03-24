import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercialViewComponent } from './commercial-view.component';

describe('CommercialViewComponent', () => {
  let component: CommercialViewComponent;
  let fixture: ComponentFixture<CommercialViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommercialViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommercialViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
