import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenciesFormEditComponent } from './agencies-form-edit.component';

describe('AgenciesFormEditComponent', () => {
  let component: AgenciesFormEditComponent;
  let fixture: ComponentFixture<AgenciesFormEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgenciesFormEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgenciesFormEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
