import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AirlinesPage } from './airlines.page';

describe('AirlinesPage', () => {
  let component: AirlinesPage;
  let fixture: ComponentFixture<AirlinesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AirlinesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
