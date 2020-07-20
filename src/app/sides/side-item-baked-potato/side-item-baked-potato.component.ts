import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-side-item-baked-potato',
  templateUrl: './side-item-baked-potato.component.html',
  styleUrls: ['../side-item.component.css']
})
export class SideItemBakedPotatoComponent implements OnInit {

  name = "Baked Potato";

  desc = "";

  image = "";

  options;

  optionsName = "How many";

  optionSelected;

  noOptionSelected: boolean = false;

  formatted = {
    name: this.name,
    options: [],
    optionsName: this.optionsName
  };

  @Output() emitToParent = new EventEmitter();

  sendToParent() {
    if ((this.optionSelected != undefined) && (this.optionSelected != "")) {
      // baked potato has been selected correctly
      this.noOptionSelected = false;
      this.formatted.options[0] = this.optionSelected;  // give user input to formatted
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
