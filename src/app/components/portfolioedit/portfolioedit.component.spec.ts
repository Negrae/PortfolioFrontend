import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioeditComponent } from './portfolioedit.component';

describe('PortfolioeditComponent', () => {
  let component: PortfolioeditComponent;
  let fixture: ComponentFixture<PortfolioeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioeditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
