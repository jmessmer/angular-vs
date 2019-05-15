import { Component, OnInit } from '@angular/core';
import * as faker from 'faker';
import { CommerceProductService } from '../service/commerce-product.service';
import { Product } from '../service/product';

@Component({
  selector: 'app-basic-virtual-scroll',
  templateUrl: './basic-virtual-scroll.component.html',
  styleUrls: ['./basic-virtual-scroll.component.scss'],
  providers: [ CommerceProductService ]
})
export class BasicVirtualScrollComponent implements OnInit {
  products: Product[];

  constructor(private commerceProductService: CommerceProductService) {
    /*this.products = Array(100)
      .fill(1)
      .map(_ => {
        return {
          image: faker.image.food(),
          name: faker.commerce.productName(),
          description: faker.lorem.sentence(),
          price: faker.commerce.price(1, 100),
          weight: faker.random.number({ min: 1, max: 10, precision: 0.01 }),
          quantity: faker.random.number({ min: 0, max: 5 }),
        };
      });*/
  }

  getProducts(): void {
    this.products = this.commerceProductService.getProducts(100);
  }

  ngOnInit() {
    this.getProducts();
  }

}