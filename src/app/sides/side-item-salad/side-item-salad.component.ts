import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-side-item-salad',
  templateUrl: './side-item-salad.component.html',
  styleUrls: ['../side-item.component.css']
})
export class SideItemSaladComponent implements OnInit {

  name = "Salad";

  desc = "This is a salad description.";

  image = "";

  saladSelected: boolean = true;

  saladReveal: boolean = false;

  options = [
    {
      id: 1,
      name: "Balsamic"
    },
    {
      id: 2,
      name: "Caesar"
    }
  ];

  optionsName: string = "Dressing";

  optionSelected;

  optionSelectedFormatted = {
    name: this.name,
    option: this.optionSelected
  }

  @Output() emitToParent = new EventEmitter();

  // format the option selected by the user
  formatSelected() {
    this.optionSelectedFormatted.option = this.optionSelected.name
  }

  // send the selected to the parent
  sendToParent() {
    this.reveal();
    this.formatSelected();
    this.emitToParent.emit(this.optionSelectedFormatted);
  }

  // reveals the options for the side and a button to select the side
  reveal() {
    this.saladReveal= !this.saladReveal;
  }
  
  // for testing
  log(x) {      
    console.log(x)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
