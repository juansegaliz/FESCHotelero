import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingGroupsEditComponent } from './booking-groups-edit.component';

describe('BookingGroupsEditComponent', () => {
  let component: BookingGroupsEditComponent;
  let fixture: ComponentFixture<BookingGroupsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingGroupsEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookingGroupsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
