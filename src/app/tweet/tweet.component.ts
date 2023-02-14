import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent {
  @Input() name?: string;
  @Input() date?: string;
  @Input() avatar?: string;
  @Input() handle?: string;
}
