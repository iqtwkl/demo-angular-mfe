import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueBasketComponent } from './blue-basket.component';

describe('BlueBasketComponent', () => {
  let component: BlueBasketComponent;
  let fixture: ComponentFixture<BlueBasketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlueBasketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlueBasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
