import { Component, OnInit } from '@angular/core';
import { MatRadioChange } from '@angular/material';

import { LanguageService } from '../../service/language.service';
import { LetterService } from '../../service/letter.service';

@Component({
  selector: 'app-letters-by-language',
  templateUrl: './letters-by-language.component.html',
  styleUrls: ['./letters-by-language.component.css']
})
export class LettersByLanguageComponent implements OnInit {

  selected: number;
  languajeList: any[];
  letterList: any[];
  spinnerIsVisible: boolean;
  constructor(private languajeService :LanguageService, private letterService :LetterService) { 
   
  }  
  ngOnInit() {
    this.selected;
    this.languajeList=[];
    this.languajeService.getAll().subscribe(value => this.languajeList.push(...value)); 
  }

  radioChange(event: MatRadioChange) {
    this.selected = event.value;
    this.getLettersByLanguage();
  }

  getLettersByLanguage() {
    this.letterList=[];
    this.letterService.getByLanguageId(this.selected).subscribe(value => this.letterList.push(...value));
  }

}
