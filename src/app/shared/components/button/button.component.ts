import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() text: string = '';
  @Output() clic: EventEmitter<void> = new EventEmitter<void>();

  handleClick(): void {
    this.clic.emit();
  }
}
