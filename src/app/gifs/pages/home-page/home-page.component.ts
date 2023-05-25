import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  constructor(private gifsService: GifsService) {
    this.gifsService.getTrendingGifs();
  }

  get gifs(): Gif[] {
    return this.gifsService.gifs;
  }

  get trendingGifs(): Gif[] {
    return this.gifsService.trendingGifs;
  }
}
