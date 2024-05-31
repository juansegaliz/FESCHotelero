import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingGroupsComponent } from './booking-groups.component';

describe('BookingGroupsComponent', () => {
  let component: BookingGroupsComponent;
  let fixture: ComponentFixture<BookingGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingGroupsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookingGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
