import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DentroCastelloComponent } from './dentro-castello.component';

describe('DentroCastelloComponent', () => {
  let component: DentroCastelloComponent;
  let fixture: ComponentFixture<DentroCastelloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DentroCastelloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DentroCastelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
