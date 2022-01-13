import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmeriaComponent } from './armeria.component';

describe('ArmeriaComponent', () => {
  let component: ArmeriaComponent;
  let fixture: ComponentFixture<ArmeriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArmeriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArmeriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
