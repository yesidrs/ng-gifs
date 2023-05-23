import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [HomePageComponent, SearchBoxComponent, CardComponent],
  exports: [HomePageComponent],
  imports: [CommonModule],
})
export class GifsModule {}
