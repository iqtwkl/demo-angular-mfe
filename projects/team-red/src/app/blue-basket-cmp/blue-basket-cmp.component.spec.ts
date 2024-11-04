import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueBasketCmpComponent } from './blue-basket-cmp.component';

describe('BlueBasketCmpComponent', () => {
  let component: BlueBasketCmpComponent;
  let fixture: ComponentFixture<BlueBasketCmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlueBasketCmpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlueBasketCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
