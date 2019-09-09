import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LettersByLanguageComponent } from './letters-by-language.component';

describe('LettersByLanguageComponent', () => {
  let component: LettersByLanguageComponent;
  let fixture: ComponentFixture<LettersByLanguageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LettersByLanguageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LettersByLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
