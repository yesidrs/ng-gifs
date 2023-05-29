import { Component, Input } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gif-title',
  templateUrl: './title.component.html',
})
export class TitleComponent {
  @Input() title: string = '';
  @Input() gifs: Gif[] = [];
}
