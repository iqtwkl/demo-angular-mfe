import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-blue-basket',
  templateUrl: './blue-basket.component.html',
  styleUrls: ['./blue-basket.component.css']
})
export class BlueBasketComponent implements OnInit { 
  @Input() buyItem = new EventEmitter<string>();
  classname: string = '';
  count: number = 0;
  items: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.count = this.items.length;
    this.buyItem.subscribe((event:string) => {
      this.addToBasket(event);
      console.log('items:', this.items)
    });
  }

  addToBasket(sku: string) {
    this.items.push(sku);
    this.count = this.items.length;
  }
}
