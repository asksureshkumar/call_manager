import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallEditComponent } from './call-edit.component';

describe('CallEditComponent', () => {
  let component: CallEditComponent;
  let fixture: ComponentFixture<CallEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
