import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingGroupsAddComponent } from './booking-groups-add.component';

describe('BookingGroupsAddComponent', () => {
  let component: BookingGroupsAddComponent;
  let fixture: ComponentFixture<BookingGroupsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingGroupsAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookingGroupsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
