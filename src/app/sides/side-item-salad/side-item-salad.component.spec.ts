import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideItemSaladComponent } from './side-item-salad.component';

describe('SideItemSaladComponent', () => {
  let component: SideItemSaladComponent;
  let fixture: ComponentFixture<SideItemSaladComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideItemSaladComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideItemSaladComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
