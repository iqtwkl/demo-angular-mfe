import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-blue-buy',
  templateUrl: './blue-buy.component.html',
  styleUrls: ['./blue-buy.component.css']
})
export class BlueBuyComponent implements OnInit, OnChanges {
  @Input() sku: keyof typeof this.prices = 't_porsche';
  @Output() buyItem = new EventEmitter<string>();
  
  prices: { [key in 't_porsche' | 't_fendt' | 't_eicher']: string } = {
    t_porsche: '66,00 €',
    t_fendt: '54,00 €',
    t_eicher: '58,00 €',
  };

  price: string = '0';

  constructor() { }

  ngOnInit(): void {
    this.price = this.prices[this.sku];
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['sku'] && changes['sku'].currentValue) {
      this.price = this.prices[this.sku];
    }
  }

  onClick() {
    this.buyItem.emit(this.sku);
  }

}
