import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-main-item-burger',
  templateUrl: './main-item-burger.component.html',
  styleUrls: ['../main-item.component.css']
})
export class MainItemBurgerComponent implements OnInit {

  name = "Burger";

  desc = "";

  image = ""; // ../../../assets/images/Burger.jpeg

  optionsName = "Condiments";

  options = [
    {
      name: "Ketchup",
      isSelected: false
    },
    {
      name: "Mustard",
      isSelected: false
    },
    {
      name: "Lettuce",
      isSelected: false
    },
    {
      name: "Tomato",
      isSelected: false
    }
  ];

  // used to hold selected options
  optionsSelected = [];

  // used to hold formatted selected options
  optionsFormatted = {
    name: this.optionsName,
    options: []
  }

  sidesName = "Sides";

  // used to hold selected side
  sideSelected = {
    name: "",
    options: [],
    optionName: ""
  };

  noSideSelected: boolean = false

  @Output() emitToParent = new EventEmitter();

  @Input() specialRequests;

  // used to send entire burger to parent
  formatted = {
      name: this.name,
      options: this.optionsFormatted,
      side: this.sideSelected,
      specialRequests: this.specialRequests
  }

  // used as an index counter in formatOptions()
  i;

  // used to track number of burgers in order
  inOrder = 0;
  
  // used to update burger options upon user input
  optionsChanged() {
    this.optionsSelected = this.options.filter((value, index) => {
      return value.isSelected
    });
  }

  // used to format user selected options before sending to parent
  formatOptions() {
    this.i = 0;
    this.optionsFormatted.name = this.optionsName
    for (let option of this.optionsSelected) {
      this.optionsFormatted.options[this.i] = option.name;
      this.i += 1;
    }
    this.i = 0
  }

  receiveFromChild(event) {
    this.sideSelected = event
  }

  // used to send entire burger item to parent
  sendToParent() {
    if (this.sideSelected.options.length > 0) {
      this.inOrder += 1;
      this.noSideSelected = false
      this.formatOptions();
      this.formatted.options = this.optionsFormatted;
      this.formatted.side = this.sideSelected;
      this.formatted.specialRequests = this.specialRequests;
      this.emitToParent.emit(this.formatted)
    }
    else {
      this.noSideSelected = true
    }

  }

  constructor() { }

  ngOnInit(): void {
  }

}
