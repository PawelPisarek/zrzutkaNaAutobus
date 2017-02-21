import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelayedTransportListComponent } from './delayed-transport-list.component';

describe('DelayedTransportListComponent', () => {
  let component: DelayedTransportListComponent;
  let fixture: ComponentFixture<DelayedTransportListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelayedTransportListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelayedTransportListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
