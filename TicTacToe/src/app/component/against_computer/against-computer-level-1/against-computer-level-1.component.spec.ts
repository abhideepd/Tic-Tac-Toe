import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgainstComputerLevel1Component } from './against-computer-level-1.component';

describe('AgainstComputerLevel1Component', () => {
  let component: AgainstComputerLevel1Component;
  let fixture: ComponentFixture<AgainstComputerLevel1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgainstComputerLevel1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgainstComputerLevel1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
