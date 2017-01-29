import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';
  sortIndices = [];
  constructor() {

    this.sortIndices = [
      {value: 'ikea', label: 'Featured'},
      {value: 'ikea_price_asc', label: 'Price asc.'},
      {value: 'ikea_price_desc', label: 'Price desc.'}
    ];
  }
}
