import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitiesFormAddComponent } from './cities-form-add.component';

describe('CitiesFormAddComponent', () => {
  let component: CitiesFormAddComponent;
  let fixture: ComponentFixture<CitiesFormAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CitiesFormAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CitiesFormAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
