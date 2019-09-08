import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorshipLettersComponent } from './sponsorship-letters.component';

describe('SponsorshipLettersComponent', () => {
  let component: SponsorshipLettersComponent;
  let fixture: ComponentFixture<SponsorshipLettersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SponsorshipLettersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorshipLettersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
