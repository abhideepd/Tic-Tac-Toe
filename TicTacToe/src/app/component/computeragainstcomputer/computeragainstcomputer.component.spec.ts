import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputeragainstcomputerComponent } from './computeragainstcomputer.component';

describe('ComputeragainstcomputerComponent', () => {
  let component: ComputeragainstcomputerComponent;
  let fixture: ComponentFixture<ComputeragainstcomputerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComputeragainstcomputerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComputeragainstcomputerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
