import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VocabMainComponent } from './vocab-main.component';

describe('VocabMainComponent', () => {
  let component: VocabMainComponent;
  let fixture: ComponentFixture<VocabMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VocabMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VocabMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
