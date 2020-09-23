import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasescComponent } from './casesc.component';

describe('CasescComponent', () => {
  let component: CasescComponent;
  let fixture: ComponentFixture<CasescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
