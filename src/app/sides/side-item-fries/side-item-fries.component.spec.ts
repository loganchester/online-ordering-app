import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideItemFriesComponent } from './side-item-fries.component';

describe('SideItemFriesComponent', () => {
  let component: SideItemFriesComponent;
  let fixture: ComponentFixture<SideItemFriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideItemFriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideItemFriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
