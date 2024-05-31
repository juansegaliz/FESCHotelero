import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenciesFormAddComponent } from './agencies-form-add.component';

describe('AgenciesFormAddComponent', () => {
  let component: AgenciesFormAddComponent;
  let fixture: ComponentFixture<AgenciesFormAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgenciesFormAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgenciesFormAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
