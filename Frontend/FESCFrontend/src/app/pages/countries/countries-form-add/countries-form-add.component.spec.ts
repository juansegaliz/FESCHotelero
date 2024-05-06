import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesFormAddComponent } from './countries-form-add.component';

describe('CountriesFormAddComponent', () => {
  let component: CountriesFormAddComponent;
  let fixture: ComponentFixture<CountriesFormAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountriesFormAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CountriesFormAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
