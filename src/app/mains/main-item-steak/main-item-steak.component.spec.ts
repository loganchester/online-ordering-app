import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainItemSteakComponent } from './main-item-steak.component';

describe('MainItemSteakComponent', () => {
  let component: MainItemSteakComponent;
  let fixture: ComponentFixture<MainItemSteakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainItemSteakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainItemSteakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
