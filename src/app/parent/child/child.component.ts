import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'Child',
  styleUrls: ['./child.component.css'],
  template: `
  <h2>
  {{childTitle}}
  </h2>
  <button type="button" (click)=" notifyParent() ">Click me!</button>`

})

export class ChildComponent implements OnInit {
// title: 'Im a nested component';
@Input() childTitle: string;
@Output() notification = new EventEmitter<string>();

ngOnInit() {
  console.log(this.childTitle, 'my child works!');
}
constructor() {

}
notifyParent() {
  this.notification.emit('click from nested');
}
}
