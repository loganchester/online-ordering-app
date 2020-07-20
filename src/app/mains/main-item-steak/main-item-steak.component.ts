import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-main-item-steak',
  templateUrl: './main-item-steak.component.html',
  styleUrls: ['../main-item.component.css']
})
export class MainItemSteakComponent implements OnInit {

  name = "Steak";

  desc = "";

  image = ""; // ../../../assets/images/Steak.jpeg

  optionsName = "Doneness";

  options = [
    {
      name: "Rare"    
    },
    {
      name: "Medium"    
    },
    {
      name: "Well Done"
    }
  ];

  // used to send selected option to formatted
  optionsFormatted = {
    name: this.optionsName,
    options: []
  }

  // used to hold selected option
  optionsSelected = {
    name: ""
  };

  noOptionSelected: boolean = false;

  sidesName = "Sides";

  // used to hold selected side
  sideSelected = {
    name: "",
    options: [],
    optionsName: ""
  };

  noSideSelected: boolean = false;

  @Output() emitToParent = new EventEmitter();

  @Input() specialRequests;

  // used to send entire steak to parent
  formatted = {
    name: this.name,
    options: this.optionsSelected,
    side: this.sideSelected,
    specialRequests: this.specialRequests
  }

  // used to track number of burgers in order
  inOrder = 0;

  // used to update user options upon input
  optionsChanged() {
    this.optionsFormatted.options[0] = this.optionsSelected.name
  }
  
  receiveFromChild(event) {
    this.sideSelected = event
  }

  sendToParent() {
    if ((this.optionsFormatted.options.length > 0) && (this.sideSelected.options.length > 0)) {
      // options and side have been selected correctly
      this.inOrder += 1;
      this.noSideSelected = false;
      this.noOptionSelected = false;
      this.formatted.options = this.optionsFormatted;
      this.formatted.side = this.sideSelected;
      this.formatted.specialRequests = this.specialRequests;
      this.emitToParent.emit(this.formatted);                 // send entire main to parent
    }
    else {
      if (this.optionsFormatted.options.length == 0) {
        this.noOptionSelected = true;
      }
      else {
        this.noOptionSelected = false;
      }
      if (this.sideSelected.options.length == 0) {
        this.noSideSelected = true;
      }
      else {
        this.noSideSelected = false;
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
