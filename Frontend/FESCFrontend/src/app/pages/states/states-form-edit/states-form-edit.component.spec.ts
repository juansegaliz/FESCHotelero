import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatesFormEditComponent } from './states-form-edit.component';

describe('StatesFormEditComponent', () => {
  let component: StatesFormEditComponent;
  let fixture: ComponentFixture<StatesFormEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatesFormEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StatesFormEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
