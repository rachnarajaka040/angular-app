import { Component } from '@angular/core';
import { trigger, transition, style, animate, group, query } from '@angular/animations';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('slideInOut', [
      transition('* <=> *', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            width: '100%',
            transform: 'translateX(-100%)',
          })
        ], { optional: true }),
        query(':enter', [
          animate('500ms ease-in-out', style({ transform: 'translateX(0%)' })),
        ], { optional: true }),
        group([
          query(':leave', [
            animate('500ms ease-in-out', style({ transform: 'translateX(100%)' })),
          ], { optional: true }),
        ])
      ]),
    ])
  ]
})
export class AppComponent {
  prepareRoute(outlet: RouterOutlet) {
    // if (outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation) {
    //   return outlet.activatedRouteData.animation;
    // }
    return null;
  }
}
