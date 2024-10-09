import { Component } from '@angular/core';
import { Post } from '../../interfaces/ipost';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  posts: Post[] = [];

  ngOnInit() {
    fetch('db.json')
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Errore nella get!');
        }
      })
      .then((data) => {
        this.posts.push(data.posts);
      })
      .catch((err) => {
        console.log('Error', err);
      });
  }
}
