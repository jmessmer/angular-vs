import { Component, OnInit } from '@angular/core';
import * as faker from 'faker';
import { Observable, Subject} from 'rxjs';
import {WebcamImage} from 'ngx-webcam';

@Component({
  selector: 'app-basic-avatar-scroll',
  templateUrl: './basic-avatar-scroll.component.html',
  styleUrls: ['./basic-avatar-scroll.component.scss']
})
export class BasicAvatarScrollComponent implements OnInit {
  persons = [];
  public webcamImage: WebcamImage = null;

  constructor() { 
    this.persons = Array(100)
      .fill(1)
      .map(_ => {
        return {
          card: faker.helpers.createCard()
        };
      });
  }

  handleImage(webcamImage: WebcamImage) {
    this.webcamImage = webcamImage;
  }

  ngOnInit() {
  }

}