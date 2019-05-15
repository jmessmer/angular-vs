import { Component, OnInit } from '@angular/core';
import { emojiRandom } from '../emojis';
import * as faker from 'faker';

@Component({
  selector: 'app-basic-virtual-scroll',
  templateUrl: './basic-virtual-scroll.component.html',
  styleUrls: ['./basic-virtual-scroll.component.scss']
})
export class BasicVirtualScrollComponent implements OnInit {
  products;

  constructor() {
    this.products = Array(100)
      .fill(1)
      .map(_ => {
        return {
          //name: faker.name.findName(),
         // bio: faker.hacker.phrase(),
          //image: faker.image.cats(),
          //emoji: emojiRandom(),
          image: faker.image.food(),
          name: faker.commerce.productName(),
          description: faker.lorem.sentence(),
          price: faker.commerce.price(1, 100),
          weight: faker.random.number({ min: 1, max: 10, precision: 0.01 }),
          quantity: faker.random.number({ min: 0, max: 5 }),
        };
      });
  }

  ngOnInit() {
  }

}