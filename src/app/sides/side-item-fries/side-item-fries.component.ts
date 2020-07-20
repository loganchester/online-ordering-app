import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-side-item-fries',
  templateUrl: './side-item-fries.component.html',
  styleUrls: ['../side-item.component.css']
})
export class SideItemFriesComponent implements OnInit {

  name = "Fries";

  desc = "";

  image = "";

  options = ["Small", "Large"];

  optionsName = "Sizes";

  optionSelected = [];

  noOptionSelected: boolean = false;

  formatted = {
    name: this.name,
    options: [],
    optionsName: this.optionsName
  };

  @Output() emitToParent = new EventEmitter();

  sendToParent() {
    if (this.optionSelected.length > 0) {
      // fries have been selected correctly
      this.noOptionSelected = false;
      this.formatted.options[0] = this.optionSelected;  // give the user selected size to formatted
      this.emitToParent.emit(this.formatted);           // send the selected to the parent
    }
    else {
      this.noOptionSelected = true;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
