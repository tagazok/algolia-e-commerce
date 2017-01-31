import { Component, ViewChild } from '@angular/core';
import {MdSidenav} from '@angular/material';
import { AlgoliaService } from '@tagazok/algolia-angular-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';
  sortIndices = [];

  @ViewChild(MdSidenav) sidenav: MdSidenav;

  constructor(private as: AlgoliaService) {

    this.as.connect('latency', '6be0576ff61c053d5f9a3225e2a90f76');
    
    this.sortIndices = [
      {value: 'ikea', label: 'Featured'},
      {value: 'ikea_price_asc', label: 'Price asc.'},
      {value: 'ikea_price_desc', label: 'Price desc.'}
    ];
  }

  isScreenSmall(): boolean {
    return window.matchMedia(`(max-width: 840px)`).matches;
  }
}
