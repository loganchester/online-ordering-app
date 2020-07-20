import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuMainsComponent } from './menu-mains.component';

describe('MenuMainsComponent', () => {
  let component: MenuMainsComponent;
  let fixture: ComponentFixture<MenuMainsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuMainsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuMainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
