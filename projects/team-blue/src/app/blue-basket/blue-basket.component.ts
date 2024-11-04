import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blue-basket',
  templateUrl: './blue-basket.component.html',
  styleUrls: ['./blue-basket.component.css']
})
export class BlueBasketComponent implements OnInit { 
  @Input() buyItem: string = ''; // This will hold the latest item to add
  classname: string = '';
  count: number = 0;
  items: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.count = this.items.length;
  }

  ngOnChanges(): void {
    if (this.buyItem) {
      this.addToBasket(this.buyItem);
    }
  }

  addToBasket(sku: string) {
    this.items.push(sku);
    this.count = this.items.length;
  }
}
