import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoscoComponent } from './bosco.component';

describe('BoscoComponent', () => {
  let component: BoscoComponent;
  let fixture: ComponentFixture<BoscoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoscoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoscoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
