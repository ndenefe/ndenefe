import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JapaneseStudyComponent } from './japanese-study.component';

describe('JapaneseStudyComponent', () => {
  let component: JapaneseStudyComponent;
  let fixture: ComponentFixture<JapaneseStudyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JapaneseStudyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JapaneseStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
