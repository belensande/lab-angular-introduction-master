import { Component} from '@angular/core';

class Comment {
  created: Date = new Date();
  constructor(public user: string, public text: string) { }
}

@Component({
  selector: 'app-comments-component',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.css']
})
export class CommentsComponentComponent {
  comment1: Comment = new Comment('User1', 'Comment text');
  comment2: Comment = new Comment('User2', 'Other comment text');
}
