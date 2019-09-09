import { Component, OnInit } from '@angular/core';
import { MatRadioChange } from '@angular/material';

@Component({
  selector: 'app-sponsorship-letters',
  templateUrl: './sponsorship-letters.component.html',
  styleUrls: ['./sponsorship-letters.component.css']
})
export class SponsorshipLettersComponent implements OnInit {
  
  selected: number;
  
  constructor() { 
    
  }
  
  ngOnInit() {
    this.selected = 1
  }
  
  radioChange(event: MatRadioChange) {
    this.selected = event.value;
    this.lettersListOptionIsSelected();
  }

  lettersListOptionIsSelected(): boolean {
    return this.selected === 1;
  }
}
