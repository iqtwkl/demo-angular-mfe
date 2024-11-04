import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueBuyBtnComponent } from './blue-buy-btn.component';

describe('BlueBuyBtnComponent', () => {
  let component: BlueBuyBtnComponent;
  let fixture: ComponentFixture<BlueBuyBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlueBuyBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlueBuyBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
