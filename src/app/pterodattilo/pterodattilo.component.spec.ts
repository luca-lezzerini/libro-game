import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PterodattiloComponent } from './pterodattilo.component';

describe('PterodattiloComponent', () => {
  let component: PterodattiloComponent;
  let fixture: ComponentFixture<PterodattiloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PterodattiloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PterodattiloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
