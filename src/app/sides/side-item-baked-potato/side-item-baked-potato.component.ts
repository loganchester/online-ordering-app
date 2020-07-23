import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-side-item-baked-potato',
  templateUrl: './side-item-baked-potato.component.html',
  styleUrls: ['../side-item.component.css']
})
export class SideItemBakedPotatoComponent implements OnInit {

  name = "Baked Potato";

  desc = "This is a baked potato description.";

  image = "";

  bakedPotatoSelected: boolean = true;

  bakedPotatoReveal: boolean = false;

  optionSelected;

  optionSelectedFormatted = {
    name: this.name,
    option: this.optionSelected
  }

  @Output() emitToParent = new EventEmitter();

  // format the option selected by the user
  formatSelected() {
    this.optionSelectedFormatted.option = this.optionSelected
  }

  // send the selected to the parent
  sendToParent() {
    this.reveal();
    this.formatSelected();
    this.emitToParent.emit(this.optionSelectedFormatted);
  }

  // reveals the options for the side and a button to select the side
  reveal() {
    this.bakedPotatoReveal= !this.bakedPotatoReveal;
  }
  
  // for testing
  log(x) {      
    console.log(x)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
