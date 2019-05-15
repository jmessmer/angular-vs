import { Component, OnInit } from '@angular/core';
import { emojiRandom } from '../emojis';
import * as faker from 'faker';

@Component({
  selector: 'app-basic-virtual-scroll',
  templateUrl: './basic-virtual-scroll.component.html',
  styleUrls: ['./basic-virtual-scroll.component.scss']
})
export class BasicVirtualScrollComponent implements OnInit {
  people;
  
  constructor() {
    this.people = Array(1000)
      .fill(1)
      .map(_ => {
        return {
          name: faker.name.findName(),
          bio: faker.hacker.phrase(),
          image: faker.image.cats(),
          emoji: emojiRandom()
        };
      });
  }

  ngOnInit() {
  }

}