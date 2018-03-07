import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KanjiMainComponent } from './kanji-main.component';

describe('KanjiMainComponent', () => {
  let component: KanjiMainComponent;
  let fixture: ComponentFixture<KanjiMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KanjiMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KanjiMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
