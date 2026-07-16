import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovelHairStudio } from './novel-hair-studio';

describe('NovelHairStudio', () => {
  let component: NovelHairStudio;
  let fixture: ComponentFixture<NovelHairStudio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NovelHairStudio],
    }).compileComponents();

    fixture = TestBed.createComponent(NovelHairStudio);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
