import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { newArray } from "@angular/compiler/src/util";

@Component({
  selector: "app-menu-mains",
  templateUrl: "./menu-mains.component.html",
  styleUrls: ["./menu-mains.component.css"]
})
export class MenuMainsComponent implements OnInit {

  orderString: string = "";

  orderFormatted = new Array();

  @Output() emitToParent = new EventEmitter();

  mainCompleted: boolean = false;

  // a main has been added to the order
  receiveFromChild(event) {
    this.mainCompleted = true;
    this.formatOrder(event);
    this.orderFormatted.push(this.orderString);
    this.orderString = "";
  }

  // send complete order to app
  submit() {
    this.emitToParent.emit(this.orderFormatted);
    this.orderFormatted = new Array();
  }

  // for testing
  log(x) {
    console.log(x);
  }

  formatOrder(event) {
    // main name
    this.orderString += event.name + "\n" + "\t";
    
    // main options
    this.orderString += "Option(s): "
    if (event.options instanceof Array) {
      // there is more than one option selected
      for (let option of event.options) {
        this.orderString += option.name + "\t";
      }
    }
    else {
      // there is only one option
      this.orderString += event.options.name;
    }
    this.orderString += "\n" + "\n" + "\t";

    // main side
    this.orderString += "Side: " + event.side.option + " " + event.side.name + "\n" + "\t";

    // special requests
    if (event.specialRequests != undefined) {    
      this.orderString += "\n" + "\t";
      this.orderString += "Special Requests: " + event.specialRequests;
    }
    this.orderString += "\n" + "\n";
  }

  constructor() { }

  ngOnInit(): void {
  }

}
