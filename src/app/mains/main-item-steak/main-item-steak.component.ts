import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-main-item-steak',
  templateUrl: './main-item-steak.component.html',
  styleUrls: ['../main-item.component.css']
})
export class MainItemSteakComponent implements OnInit {

  name = "Steak";

  desc = "This is a description for steak.";

  image = ""; // ../../../assets/images/Steak.jpeg

  optionsName = "Doneness";

  sidesComplete: boolean = false;

  optionsComplete: boolean = false;

  options = [
    {
      id: 1,
      name: "Rare"    
    },
    {
      id: 2,
      name: "Medium"    
    },
    {
      id: 3,
      name: "Well Done"
    }
  ];

  // used to hold selected options
  optionsSelected;

  // used to hold formatted selected options
  optionsFormatted;

  sidesName = "Sides";

  // used to hold selected side
  sideSelected;

  steakReveal: boolean = false;

  @Output() emitToParent = new EventEmitter();

  @Input() specialRequests;

  // used to send entire steak to parent
  formatted = {
    name: this.name,
    options: this.optionsSelected,
    side: this.sideSelected,
    specialRequests: this.specialRequests
  }

  orderButton: string = "Selections Required";

  sidesRequiredTextStyle: string = "color: red";

  sidesRequiredText: string = "*Required";

  optionsRequiredTextStyle: string = "color: red";

  optionsRequiredText: string = "*Required";

  saladStyle: string = "";

  potatoStyle: string = "";
  

  // used to update user options upon input
  optionsChanged() {
    this.optionsComplete = true;
    this.optionsRequiredText = "";
    this.optionsRequiredTextStyle = "";
    this.orderButtonToggle();
  }
  
  // side selection obtained from side component
  receiveFromChild(event) {
    this.sideSelected = event;
    this.sidesComplete = true;
    // change the border around the side that is currently selected
    if (event.name == "Salad") {
      this.saladStyle = "border: #ACCEF7 solid 2px";
      this.potatoStyle = "";
    }
    if (event.name == "Baked Potato") {
      this.potatoStyle = "border: #ACCEF7 solid 2px";
      this.saladStyle = "";
    }
    this.sidesRequiredText = "";
    this.sidesRequiredTextStyle = "";
    this.orderButtonToggle();
  }

  // to change the order button string
  orderButtonToggle() {
    if (this.optionsComplete && this.sidesComplete ) {
      this.orderButton = "Add to order";
    }
    else {
      this.orderButton = "Selections Required";
    }
  }

  // reveals the options for the side and a button to select the side
  reveal() {
    this.steakReveal= !this.steakReveal;
  }

  // for testing
  log(x) {
    console.log(x);
  }

  // used to format everything relating to a burger
  formatAll() {
    this.formatted.options = this.optionsSelected;
    this.formatted.side = this.sideSelected;
    this.formatted.specialRequests = this.specialRequests;
  }

  // used to send entire burger item to parent
  sendToParent() {
    this.formatAll(); 
    this.log(this.formatted);
    this.emitToParent.emit(this.formatted)
    this.reset();
    this.reveal();
  }

    // reset the component
    reset() {
      this.formatted = {
        name: this.name,
        options: this.optionsFormatted,
        side: this.sideSelected,
        specialRequests: this.specialRequests
      }

      // options reset
      this.optionsSelected = undefined;
      this.optionsComplete = false;
      this.optionsRequiredTextStyle = "color: red";
      this.optionsRequiredText = "*Required";
      this.options = [
        {
          id: 1,
          name: "Rare"    
        },
        {
          id: 2,
          name: "Medium"    
        },
        {
          id: 3,
          name: "Well Done"
        }
      ];

      // sides reset
      this.sideSelected = undefined;
      this.sidesComplete = false;
      this.sidesRequiredTextStyle = "color: red";
      this.sidesRequiredText = "*Required";
      this.saladStyle = "";
      this.potatoStyle = "";

      // special requests reset
      this.specialRequests = undefined;

      // order button reset
      this.orderButtonToggle();
    }

  constructor() { }

  ngOnInit(): void {
  }

}
