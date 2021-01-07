import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListToanimComponent } from './list-toanim.component';

describe('ListToanimComponent', () => {
  let component: ListToanimComponent;
  let fixture: ComponentFixture<ListToanimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListToanimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListToanimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
