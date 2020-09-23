import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasesiComponent } from './casesi.component';

describe('CasesiComponent', () => {
  let component: CasesiComponent;
  let fixture: ComponentFixture<CasesiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasesiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasesiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
