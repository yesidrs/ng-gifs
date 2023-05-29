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
  private _trendingGifs: Gif[] = [];
  private _offsetSearch: number = 0;
  private _offsetTrending: number = 0;
  private _gifsPerPage: number = 15;

  constructor(private http: HttpClient) {
    this.loadLocalStorage();
  }

  get tagsHistory() {
    return [...this._tagsHistory];
  }

  get gifs() {
    return [...this._gifs];
  }

  get trendingGifs() {
    return [...this._trendingGifs];
  }

  clean(): void {
    this._tagsHistory = [];
    this._gifs = [];
    this.saveLocalStorage();
    this._offsetSearch = 0;
    this._offsetTrending = 0;
    this.getTrendingGifs();
  }

  searchGifs(tag: string): void {
    // validations
    tag = tag.toLowerCase();
    this.removeDuplicatedTags(tag);
    this.limitTagsHistory();

    // add and save tag
    this._tagsHistory.unshift(tag);
    this.saveLocalStorage();

    // search gifs - api call
    const { apiKey, apiUrl, limit } = environment;

    const params = new HttpParams()
      .set('api_key', apiKey)
      .set('q', tag)
      .set('limit', limit)
      .set('offset', this._offsetSearch.toString());

    this.http
      .get<SearchResponse>(`${apiUrl}/search`, { params })
      .subscribe((response) => {
        this._gifs = response.data;
      });
  }

  getTrendingGifs(): void {
    const { apiKey, apiUrl, limit } = environment;

    const params = new HttpParams()
      .set('api_key', apiKey)
      .set('limit', limit)
      .set('offset', this._offsetTrending.toString());

    this.http
      .get<SearchResponse>(`${apiUrl}/trending`, { params })
      .subscribe((response) => {
        this._trendingGifs = response.data;
      });
  }

  resetOffsetByTag(tag: string): void {
    if (this._tagsHistory[0] !== tag) this._offsetSearch = 0;
  }

  resetOffset(): void {
    this._offsetSearch = 0;
  }

  nextPageSearch(): void {
    this._offsetSearch += this._gifsPerPage;
    this.searchGifs(this._tagsHistory[0]);
  }

  previousPageSearch(): void {
    if (this._offsetSearch >= this._gifsPerPage) {
      this._offsetSearch -= this._gifsPerPage;
      this.searchGifs(this._tagsHistory[0]);
    }
  }

  nextPageTrend(): void {
    this._offsetTrending += this._gifsPerPage;
    this.getTrendingGifs();
  }

  previousPageTrend(): void {
    if (this._offsetTrending >= this._gifsPerPage) {
      this._offsetTrending -= this._gifsPerPage;
      this.getTrendingGifs();
    }
  }

  // localStorage
  private saveLocalStorage(): void {
    localStorage.setItem('tagsHistory', JSON.stringify(this._tagsHistory));
  }

  private loadLocalStorage(): void {
    const tagsHistory = localStorage.getItem('tagsHistory');

    if (tagsHistory) {
      this._tagsHistory = JSON.parse(tagsHistory);
    }
  }

  // validations
  private removeDuplicatedTags(tag: string): void {
    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((t) => t !== tag);
    }
  }

  private limitTagsHistory(): void {
    if (this._tagsHistory.length === 10) {
      this._tagsHistory.pop();
    }
  }
}
