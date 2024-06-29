import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralEmpleadosComponent } from './general-empleados.component';

describe('GeneralEmpleadosComponent', () => {
  let component: GeneralEmpleadosComponent;
  let fixture: ComponentFixture<GeneralEmpleadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GeneralEmpleadosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GeneralEmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
