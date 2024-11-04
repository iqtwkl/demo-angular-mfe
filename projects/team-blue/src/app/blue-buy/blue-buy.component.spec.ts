import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueBuyComponent } from './blue-buy.component';

describe('BlueBuyComponent', () => {
  let component: BlueBuyComponent;
  let fixture: ComponentFixture<BlueBuyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlueBuyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlueBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
