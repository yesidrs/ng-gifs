import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  constructor(private gifsService: GifsService) {}

  get tagsHistory() {
    return this.gifsService.tagsHistory;
  }

  public searchByTag(tag: string) {
    this.gifsService.resetOffset();
    this.gifsService.searchGifs(tag);
  }

  public clean() {
    this.gifsService.clean();
  }
}
