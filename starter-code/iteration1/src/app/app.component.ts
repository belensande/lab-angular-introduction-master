import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstImageUrl = 'https://www.w3schools.com/howto/img_fjords.jpg';
  firstImageTitle = 'Fist photo';
  secondImageUrl = 'https://www.w3schools.com/w3css/img_lights.jpg';
  secondImageTitle = 'Second photo';
  thirdImageUrl = 'https://www.w3schools.com/w3css/img_mountains.jpg';
  thirdImageTitle = 'Third photo';
}
