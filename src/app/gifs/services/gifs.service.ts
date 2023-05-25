import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _tagsHistory: string[] = [];

  get tagsHistory() {
    return [...this._tagsHistory];
  }

  searchTag(tag: string): void {
    this.duplicatedTags(tag);

    this._tagsHistory.unshift(tag);

    this.limitTagsHistory();
  }

  private duplicatedTags(tag: string): void {
    tag = tag.toLowerCase();
    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((t) => t !== tag);
    }
  }

  private limitTagsHistory(): void {
    if (this._tagsHistory.length > 10) {
      this._tagsHistory.pop();
    }
  }
}
