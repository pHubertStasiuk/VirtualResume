import { trigger, state, style, transition, animate } from '@angular/animations';

export const FadeIn = trigger('FadeIn', [
  state('show', style({
    opacity: 1,
  })),
  state('hide', style({
    opacity: 0,
  })),
  transition('show => hide', animate('700ms ease-out')),
  transition('hide => show', animate('700ms ease-in'))
]);
