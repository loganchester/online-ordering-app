import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-side-item-salad',
  templateUrl: './side-item-salad.component.html',
  styleUrls: ['../side-item.component.css']
})
export class SideItemSaladComponent implements OnInit {

  name = "Salad";

  desc = "";

  image = "";

  options = ["Balsamic", "Caesar"];

  optionsName = "Dressings";

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
      // salad has been selected correctly
      this.noOptionSelected = false;
      this.formatted.options[0] = this.optionSelected;  // give the dressing the user selected to formatted
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
