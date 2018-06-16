import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'parent',
  styleUrls: ['./parent.component.css'],
  templateUrl: './parent.component.html'

})
export class ParentComponent {
// title: 'parent';
 child = 'Text passed to child';
 onNotify(message: string) {

   alert(message);
 }
}
