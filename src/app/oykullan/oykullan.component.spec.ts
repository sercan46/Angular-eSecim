import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OykullanComponent } from './oykullan.component';

describe('OykullanComponent', () => {
  let component: OykullanComponent;
  let fixture: ComponentFixture<OykullanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OykullanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OykullanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
