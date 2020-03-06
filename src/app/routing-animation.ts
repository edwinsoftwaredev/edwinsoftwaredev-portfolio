import { trigger, transition, query, group, animate, style, state, animation } from '@angular/animations';

export const routeComponentsAnimation =
    trigger('routeAnimations', [
        transition('* <=> *', [
            query(':enter', [
                style({opacity: 0, width: '100%'}),
                animate('250ms ease-in', style({opacity: 1, width: '100%'}))
            ], {optional: true}),
            query(':leave', [
                style({opacity: 1, width: '100%'}),
                animate('250ms ease-out', style({opacity: 0, width: '100%'}))
            ], {optional: true})
        ])
    ]);
