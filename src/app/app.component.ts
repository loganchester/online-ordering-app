import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'online-ordering-app';

  order;

  mainHidden: boolean = false;

  receiveFromChild(event) {
    this.mainHidden = true;
    this.order = event;
  }

  newOrder() {
    this.mainHidden = false;
  }

}
