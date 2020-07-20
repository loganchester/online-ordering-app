import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'online-ordering-app';

  order;

  orderHidden: boolean = true;

  receiveFromChild(event) {
    this.order = event;
    this.orderHidden = false;
    console.log("Order: ", this.order)
  }

  newOrder() {
    this.orderHidden = true;
  }

}
