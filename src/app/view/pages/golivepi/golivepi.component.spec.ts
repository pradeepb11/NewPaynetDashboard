import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GolivepiComponent } from './golivepi.component';

describe('GolivepiComponent', () => {
  let component: GolivepiComponent;
  let fixture: ComponentFixture<GolivepiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GolivepiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GolivepiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
