import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelayedTransportAddComponent } from './delayed-transport-add.component';

describe('DelayedTransportAddComponent', () => {
  let component: DelayedTransportAddComponent;
  let fixture: ComponentFixture<DelayedTransportAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelayedTransportAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelayedTransportAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
