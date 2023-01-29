import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  ask1: boolean = false;
  ask2: boolean = false;
  ask3: boolean = false;
  ask4: boolean = false;

  setAsk1() {
    this.ask1 = !this.ask1
  }
  setAsk2() {
    this.ask2 = !this.ask2
  }
  setAsk3() {
    this.ask3 = !this.ask3
  }
  setAsk4() {
    this.ask4 = !this.ask4
  }
}
