import { ElementRef } from '@angular/core';

export const cleanInput = (input: ElementRef<HTMLInputElement>) => {
  input.nativeElement.value = '';
};
