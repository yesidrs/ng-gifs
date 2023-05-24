import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent {
  @ViewChild('txtSearch')
  public txtSearch!: ElementRef<HTMLInputElement>;

  search() {
    const searchValue = this.txtSearch.nativeElement.value;
    console.log(searchValue);
  }
}
