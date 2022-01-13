import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegreteComponent } from './segrete.component';

describe('SegreteComponent', () => {
  let component: SegreteComponent;
  let fixture: ComponentFixture<SegreteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SegreteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SegreteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
