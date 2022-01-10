import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuoriDalCastelloComponent } from './fuori-dal-castello.component';

describe('FuoriDalCastelloComponent', () => {
  let component: FuoriDalCastelloComponent;
  let fixture: ComponentFixture<FuoriDalCastelloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuoriDalCastelloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuoriDalCastelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
