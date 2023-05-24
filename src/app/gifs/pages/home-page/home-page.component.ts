import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  gifs: string[] = [
    'https://media.giphy.com/media/3o7aCSPqXE5C6T8tBC/giphy.gif',
    'https://media.giphy.com/media/4Zo41lhzKt6iZ8xff9/giphy.gif',
    'https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif',
  ];

  constructor(private gifsService: GifsService) {}
}
