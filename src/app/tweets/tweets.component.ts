import { Component } from '@angular/core';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent {
  // Fetch tweet data
  tweets = [
    {
      name: 'John Smith',
      avatar: 'https://images.unsplash.com/photo-1508280756091-9bdd7ef1f463?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1832&q=80',
      handle: '@johnsmith0345',
      date: 'Apr 12, 2022',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!'
    },
    {
      name: 'John Smith',
      avatar: 'https://images.unsplash.com/photo-1508280756091-9bdd7ef1f463?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1832&q=80',
      handle: '@johnsmith0345',
      date: 'Apr 12, 2022',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!'
    },
    {
      name: 'John Smith',
      avatar: 'https://images.unsplash.com/photo-1508280756091-9bdd7ef1f463?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1832&q=80',
      handle: '@johnsmith0345',
      date: 'Apr 12, 2022',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!'
    }
  ];
}
