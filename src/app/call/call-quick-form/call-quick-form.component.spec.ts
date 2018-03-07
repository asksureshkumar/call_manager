import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallQuickFormComponent } from './call-quick-form.component';

describe('CallQuickFormComponent', () => {
  let component: CallQuickFormComponent;
  let fixture: ComponentFixture<CallQuickFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallQuickFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallQuickFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
