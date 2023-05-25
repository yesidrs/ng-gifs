import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';
import { environment } from '../environments/gifs.environments';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _tagsHistory: string[] = [];
  private _gifs: Gif[] = [];

  constructor(private http: HttpClient) {}

  get tagsHistory() {
    return [...this._tagsHistory];
  }

  get gifs() {
    return [...this._gifs];
  }

  searchGifs(tag: string): void {
    tag = tag.toLowerCase();
    this.duplicatedTags(tag);
    this.limitTagsHistory();

    this._tagsHistory.unshift(tag);

    const { apiKey, apiUrl, limit } = environment;

    const params = new HttpParams()
      .set('api_key', apiKey)
      .set('q', tag)
      .set('limit', limit);

    this.http
      .get<SearchResponse>(`${apiUrl}/search`, { params })
      .subscribe((response) => {
        this._gifs = response.data;
      });
  }

  private duplicatedTags(tag: string): void {
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
