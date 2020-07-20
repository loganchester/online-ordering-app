import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideItemBakedPotatoComponent } from './side-item-baked-potato.component';

describe('SideItemBakedPotatoComponent', () => {
  let component: SideItemBakedPotatoComponent;
  let fixture: ComponentFixture<SideItemBakedPotatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideItemBakedPotatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideItemBakedPotatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
