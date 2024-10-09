import { Component } from '@angular/core';
import { Post } from '../../interfaces/ipost';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  posts: Post[] = [];
  indexRandom: number = 0;

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
        this.posts = data.posts; //non faccio push ma uso l'uguale
        console.log(this.posts); //mi da l'array che mi aspettavo
        this.indexRandom = Math.floor(Math.random() * 30); // indice random per avere un post casuale!
        console.log(this.indexRandom);
      })
      .catch((err) => {
        console.log('Error', err);
      });
  }
}
