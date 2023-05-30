import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  hasClicked: boolean = false;

  constructor(private gifsService: GifsService) {}

  get tagsHistory() {
    return this.gifsService.tagsHistory;
  }

  searchByTag(tag: string) {
    this.gifsService.resetOffset();
    this.gifsService.searchGifs(tag);
  }

  clean() {
    this.gifsService.clean();
  }

  handleClick() {
    this.hasClicked = !this.hasClicked;
    console.log(this.hasClicked);
  }
}
