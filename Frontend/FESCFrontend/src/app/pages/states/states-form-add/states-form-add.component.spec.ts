import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatesFormAddComponent } from './states-form-add.component';

describe('StatesFormAddComponent', () => {
  let component: StatesFormAddComponent;
  let fixture: ComponentFixture<StatesFormAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatesFormAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StatesFormAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
