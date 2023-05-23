import { Component } from '@angular/core';

@Component({
  selector: 'gifs-card',
  templateUrl: './card.component.html',
})
export class CardComponent {
  imgSrc: string = 'https://media.giphy.com/media/3o7aCSPqXE5C6T8tBC/giphy.gif';
  title: string = 'Gif Title';
}
