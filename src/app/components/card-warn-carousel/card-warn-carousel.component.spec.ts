import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardWarnCarouselComponent } from './card-warn-carousel.component';

describe('CardWarnCarouselComponent', () => {
  let component: CardWarnCarouselComponent;
  let fixture: ComponentFixture<CardWarnCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardWarnCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardWarnCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
