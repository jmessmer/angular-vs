import { Injectable } from '@angular/core';
import { Product } from './product';
import * as faker from 'faker';

@Injectable()
export class CommerceProductService {

  constructor() { }

  getProducts(size: number): Array<Product> {
    return Array(100)
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
      });    
  }

}