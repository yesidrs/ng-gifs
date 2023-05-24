import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  gifs: string[] = [
    'https://media.giphy.com/media/3o7aCSPqXE5C6T8tBC/giphy.gif',
    'https://media.giphy.com/media/4Zo41lhzKt6iZ8xff9/giphy.gif',
    'https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif',
  ];
}
