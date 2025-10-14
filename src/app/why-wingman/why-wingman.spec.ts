import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyWingman } from './why-wingman';

describe('WhyWingman', () => {
  let component: WhyWingman;
  let fixture: ComponentFixture<WhyWingman>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyWingman]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyWingman);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
