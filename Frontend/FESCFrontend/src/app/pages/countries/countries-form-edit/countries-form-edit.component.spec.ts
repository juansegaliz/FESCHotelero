import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesFormEditComponent } from './countries-form-edit.component';

describe('CountriesFormEditComponent', () => {
  let component: CountriesFormEditComponent;
  let fixture: ComponentFixture<CountriesFormEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountriesFormEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CountriesFormEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
