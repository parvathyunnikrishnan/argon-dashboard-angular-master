import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DietaryCategoriesComponent } from './dietary-categories.component';

describe('DietaryCategoriesComponent', () => {
  let component: DietaryCategoriesComponent;
  let fixture: ComponentFixture<DietaryCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DietaryCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DietaryCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
