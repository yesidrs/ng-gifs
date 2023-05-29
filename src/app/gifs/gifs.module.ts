import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CardComponent } from './components/card/card.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { SharedModule } from '../shared/shared.module';
import { PaginationButtonsComponent } from './components/pagination-buttons/pagination-buttons.component';
import { TitleComponent } from './components/title/title.component';
import { GifsSwitchComponent } from './components/gifs-switch/gifs-switch.component';

@NgModule({
  declarations: [
    CardComponent,
    CardListComponent,
    HomePageComponent,
    SearchBoxComponent,
    PaginationButtonsComponent,
    TitleComponent,
    GifsSwitchComponent,
  ],
  exports: [HomePageComponent],
  imports: [CommonModule, SharedModule],
})
export class GifsModule {}
