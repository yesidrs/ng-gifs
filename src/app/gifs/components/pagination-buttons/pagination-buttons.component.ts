import { Component, Input } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-pagination-buttons',
  templateUrl: './pagination-buttons.component.html',
})
export class PaginationButtonsComponent {

  @Input() gifs: Gif[] = [];

  constructor(private gifsService: GifsService) { }

  get nextPageTrend(): void {
    return this.gifsService.nextPageTrend();
  }

  get previousPageTrend(): void {
    return this.gifsService.previousPageTrend();
  }

  get nextPageSearch(): void {
    return this.gifsService.nextPageSearch();
  }

  get previousPageSearch(): void {
    return this.gifsService.previousPageSearch();
  }
}
