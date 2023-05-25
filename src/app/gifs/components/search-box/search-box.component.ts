import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { cleanInput } from '../../helpers/gifs.helper';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent {
  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) {}

  search() {
    const newTag = this.tagInput.nativeElement.value.trim();

    if (newTag.length === 0) {
      alert('Please enter a tag');
      return;
    }

    this.gifsService.searchTag(newTag);

    cleanInput(this.tagInput);
  }
}
