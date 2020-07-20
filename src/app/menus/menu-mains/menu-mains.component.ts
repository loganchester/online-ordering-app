import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { newArray } from "@angular/compiler/src/util";

@Component({
  selector: "app-menu-mains",
  templateUrl: "./menu-mains.component.html",
  styleUrls: ["./menu-mains.component.css"]
})
export class MenuMainsComponent implements OnInit {

  orderFormatted: string = "";

  @Output() emitToParent = new EventEmitter();

  noMainsSelected: boolean = false;

  receiveFromChild(event) {
    this.formatOrder(event)
  }

  sendToParent() {
    if (this.orderFormatted.length > 0) {
      this.noMainsSelected = false;
      this.emitToParent.emit(this.orderFormatted);
    }
    else {
      this.noMainsSelected = true;
    }
  }

  formatOrder(event) {
    // main name
    this.orderFormatted += event.name + "\n" + "\t";
    // main options
    this.orderFormatted += event.options.name + ":";
    for (let option of event.options.options) {
      this.orderFormatted += "\n" + "\t\t"
      this.orderFormatted += option;
    }
    // main side
    this.orderFormatted += "\n" + "\t";
    this.orderFormatted += event.side.name + "\n" + "\t\t";
    // side options
    this.orderFormatted += event.side.optionsName + ": ";
    for (let option of event.side.options) {
      this.orderFormatted += option + " ";
    }
    // special requests
    if (event.specialRequests != undefined) {    
      this.orderFormatted += "\n" + "\t";
      this.orderFormatted += "Special Requests: " + event.specialRequests;
    }
    this.orderFormatted += "\n" + "\n";
  }

  constructor() { }

  ngOnInit(): void {
  }

}
