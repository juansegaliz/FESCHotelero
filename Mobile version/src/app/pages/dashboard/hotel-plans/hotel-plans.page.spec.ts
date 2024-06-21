import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HotelPlansPage } from './hotel-plans.page';

describe('HotelPlansPage', () => {
  let component: HotelPlansPage;
  let fixture: ComponentFixture<HotelPlansPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelPlansPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
