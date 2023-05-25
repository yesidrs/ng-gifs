import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

const API_KEY: string = 'VEvtJogPIK5tkjGaANU8E755Rdf8cxXQ';
const URL: string = 'https://api.giphy.com/v1/gifs';
const LIMIT: number = 15;

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

    const params = new HttpParams()
      .set('api_key', API_KEY)
      .set('q', tag)
      .set('limit', LIMIT.toString());

    this.http
      .get<SearchResponse>(`${URL}/search`, { params })
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
