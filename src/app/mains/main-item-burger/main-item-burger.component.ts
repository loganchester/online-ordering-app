import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-main-item-burger',
  templateUrl: './main-item-burger.component.html',
  styleUrls: ['../main-item.component.css']
})
export class MainItemBurgerComponent implements OnInit {

  name = "Burger";

  desc = "This is a description for a burger.";

  image = ""; // ../../../assets/images/Burger.jpeg

  optionsName = "Condiments";

  sidesComplete: boolean = false;

  optionsComplete: boolean = false;

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
  optionsSelected;

  // used to hold formatted selected options
  optionsFormatted;

  sidesName = "Sides";

  // used to hold selected side
  sideSelected;

  burgerReveal: boolean = false;

  @Output() emitToParent = new EventEmitter();

  @Input() specialRequests;

  // used to send entire burger to parent
  formatted = {
      name: this.name,
      options: this.optionsFormatted,
      side: this.sideSelected,
      specialRequests: this.specialRequests
  }

  orderButton: string = "Selections Required";

  sidesRequiredTextStyle: string = "color: red";

  sidesRequiredText: string = "*Required";
  
  // used to format user selected options before sending to parent
  formatOptions() {
    this.optionsSelected = this.options.filter((value, index) => {
      return value.isSelected
    })
  }

  // side selection obtained from the side component
  receiveFromChild(event) {
    this.sideSelected = event;
    this.sidesComplete = true;
    this.sidesRequiredText = this.sideSelected.name + " Selected";
    this.sidesRequiredTextStyle = "";
    this.orderButtonToggle();
  }

  // to change the order button string
  orderButtonToggle() {
    if (this.sidesComplete ) {
      this.orderButton = "Add to order";
    }
  }

  // reveals the options for the side and a button to select the side
  reveal() {
    this.burgerReveal= !this.burgerReveal;
  }

  // for testing
  log(x) {
    console.log(x);
  }

  // used to format everything relating to a burger
  formatAll() {
    this.formatOptions();
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
    this.optionsSelected = undefined;
    this.optionsComplete = false;
    this.sideSelected = undefined;
    this.sidesComplete = false;
    this.sidesRequiredTextStyle = "color: red";
    this.sidesRequiredText = "*Required";
    this.options = [
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
  }

  constructor() { }

  ngOnInit(): void {
  }

}
