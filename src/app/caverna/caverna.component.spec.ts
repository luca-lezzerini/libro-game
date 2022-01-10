import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CavernaComponent } from './caverna.component';

describe('CavernaComponent', () => {
  let component: CavernaComponent;
  let fixture: ComponentFixture<CavernaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CavernaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CavernaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
