import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryPartnersComponent } from './delivery-partners.component';

describe('DeliveryComponent', () => {
  let component: DeliveryPartnersComponent;
  let fixture: ComponentFixture<DeliveryPartnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryPartnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
