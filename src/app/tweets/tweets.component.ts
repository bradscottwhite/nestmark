import { Component } from '@angular/core';
import { TweetsService } from '../tweets.service';
import { Tweet } from '../tweet';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent {
  
  //tweets$: Tweet[] = [];

  tweets: Observable<Tweet[]>;

  constructor(private tweetsService: TweetsService) {
  
    this.tweets = this.tweetsService.getTweets();

  }

}
