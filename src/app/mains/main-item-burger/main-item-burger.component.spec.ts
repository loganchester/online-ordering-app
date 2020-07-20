import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainItemBurgerComponent } from './main-item-burger.component';

describe('MainItemBurgerComponent', () => {
  let component: MainItemBurgerComponent;
  let fixture: ComponentFixture<MainItemBurgerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainItemBurgerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainItemBurgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
