import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LazyImageComponent } from './components/lazy-image/lazy-image.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [SidebarComponent, LazyImageComponent, ButtonComponent],
  exports: [SidebarComponent, LazyImageComponent, ButtonComponent],
  imports: [CommonModule],
})
export class SharedModule {}
