import { Component } from '@angular/core';

class Championship {
  constructor(public year: string, public champion: string, public championUrl: string, public best: Array<string>) { }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  championships: Array<Championship> = [
    new Championship('2015-2016', 'Cleveland Cavaliers', 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/Cleveland_Cavaliers_logo.svg/127px-Cleveland_Cavaliers_logo.svg.png', ['Player 1', 'Player 2', 'Player 3', 'Player 4', 'Player 5']),
    new Championship('2014-2015', 'Golden State Warrios', 'https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Golden_State_Warriors_logo.svg/122px-Golden_State_Warriors_logo.svg.png', ['Other player 1', 'Other player 2', 'Other player 3', 'Other player 4', 'Other player 5']),
    new Championship('2013-2014', 'San Antonio Spurs', 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/San_Antonio_Spurs.svg/385px-San_Antonio_Spurs.svg.png', ['Other 1', 'Other 2', 'Other 3', 'Other 4'])
  ];
}
