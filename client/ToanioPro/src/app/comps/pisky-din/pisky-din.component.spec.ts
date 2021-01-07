import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PiskyDinComponent } from './pisky-din.component';

describe('PiskyDinComponent', () => {
  let component: PiskyDinComponent;
  let fixture: ComponentFixture<PiskyDinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiskyDinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiskyDinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
