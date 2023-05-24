import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _tagHistory: string[] = [];

  get tagsHistory() {
    return [...this._tagHistory];
  }

  addTag(tag: string): void {
    this._tagHistory.unshift(tag);
  }
}
