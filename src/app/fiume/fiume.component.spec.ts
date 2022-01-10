import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiumeComponent } from './fiume.component';

describe('FiumeComponent', () => {
  let component: FiumeComponent;
  let fixture: ComponentFixture<FiumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiumeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
