import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetContentComponent } from './tweet-content.component';

describe('TweetContentComponent', () => {
  let component: TweetContentComponent;
  let fixture: ComponentFixture<TweetContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TweetContentComponent]
    });
    fixture = TestBed.createComponent(TweetContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
