import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-switch',
  templateUrl: './gifs-switch.component.html',
})
export class GifsSwitchComponent {

  @Input() gifs: Gif[] = [];
  @Input() trendingGifs: Gif[] = [];

}
