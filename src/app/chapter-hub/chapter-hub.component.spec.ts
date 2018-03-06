import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterHubComponent } from './chapter-hub.component';

describe('ChapterHubComponent', () => {
  let component: ChapterHubComponent;
  let fixture: ComponentFixture<ChapterHubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapterHubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
