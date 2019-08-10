import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderAbsoluteComponent } from './header-absolute.component';

describe('HeaderAbsoluteComponent', () => {
  let component: HeaderAbsoluteComponent;
  let fixture: ComponentFixture<HeaderAbsoluteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderAbsoluteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderAbsoluteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
