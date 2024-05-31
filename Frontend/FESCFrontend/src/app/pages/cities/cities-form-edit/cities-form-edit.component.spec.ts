import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitiesFormEditComponent } from './cities-form-edit.component';

describe('CitiesFormEditComponent', () => {
  let component: CitiesFormEditComponent;
  let fixture: ComponentFixture<CitiesFormEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CitiesFormEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CitiesFormEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
