import { Component, OnInit } from '@angular/core';
import { iPost } from '../../interfaces/ipost';
import { iJSONresponse } from '../../interfaces/jsonresponse';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  //implements OnInit implementa l'interfaccia che ha come metodo ngOnInit così non si sbaglia a scriverlo!
  posts: iPost[] = [];
  indexRandom: number = 0;

  ngOnInit() {
    fetch('db.json')
      .then((response) => {
        if (response.ok) {
          return <Promise<iJSONresponse>>response.json();
        } else {
          throw new Error('Errore nella get!');
        }
      })
      .then((data) => {
        this.posts = data.posts; //non faccio push ma uso l'uguale
        console.log(this.posts); //mi da l'array che mi aspettavo
        this.indexRandom = Math.floor(Math.random() * this.posts.length); // indice random per avere un post casuale!
        console.log(this.indexRandom);
      })
      .catch((err) => {
        console.log('Error', err);
      });
  }
}
