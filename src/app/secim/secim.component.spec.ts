import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecimComponent } from './secim.component';

describe('SecimComponent', () => {
  let component: SecimComponent;
  let fixture: ComponentFixture<SecimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
