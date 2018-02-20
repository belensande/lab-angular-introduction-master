import { Component } from '@angular/core';

class Article {
  constructor(public title: string, public imageUrl: string, public text: string) { }
}

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})

export class MainComponentComponent {
  article: Article = new Article('Article Title', 'https://www.w3schools.com/howto/img_fjords.jpg', 'Article content');
}
