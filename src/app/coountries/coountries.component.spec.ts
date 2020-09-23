import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoountriesComponent } from './coountries.component';

describe('CoountriesComponent', () => {
  let component: CoountriesComponent;
  let fixture: ComponentFixture<CoountriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoountriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
