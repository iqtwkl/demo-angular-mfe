import { Component, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface ProductVariant {
  sku?: string;
  color?: string;
  name?: string;
  image?: string;
  thumb?: string;
  price?: string;
}
const product = {
  name: 'Tractor',
  variants: [
    {
      sku: 't_porsche',
      color: 'red',
      name: 'Porsche-Diesel Master 419',
      image: '/assets/images/tractor-red.jpg',
      thumb: '/assets/images/tractor-red-thumb.jpg',
      price: '66,00 €',
    },
    {
      sku: 't_fendt',
      color: 'green',
      name: 'Fendt F20 Dieselroß',
      image: '/assets/images/tractor-green.jpg',
      thumb: '/assets/images/tractor-green-thumb.jpg',
      price: '54,00 €',
    },
    {
      sku: 't_eicher',
      color: 'blue',
      name: 'Eicher Diesel 215/16',
      image: '/assets/images/tractor-blue.jpg',
      thumb: '/assets/images/tractor-blue-thumb.jpg',
      price: '58,00 €',
    },
  ],
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'team-red';
  product = product;
  variant: ProductVariant = {
    sku: 't_fendt',
    color: 'green',
    name: 'Fendt F20 Dieselroß',
    image: '/assets/images/tractor-green.jpg',
    thumb: '/assets/images/tractor-green-thumb.jpg',
    price: '54,00 €',
  };
  selectedVariant: string = 't_fendt'
  buyItem = new EventEmitter<string>();

  constructor(
    private route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((p:any) => {
      this.selectedVariant = p.params.variant ? p.params.variant : this.selectedVariant
      this.variant = product.variants.find((v) => this.selectedVariant === v.sku) as ProductVariant;
    });
  }

  onClick(event: any) {
    this.buyItem.emit(event);
  }
}
