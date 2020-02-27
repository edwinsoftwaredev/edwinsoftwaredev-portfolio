import { trigger, transition, query, group, animate, style, state, animation } from '@angular/animations';

export const routeComponentsAnimation =
    trigger('routeAnimations', [
        transition('* <=> *', [
            query(':enter', [
                style({opacity: 0}),
                animate('150ms ease-in', style({opacity: 1}))
            ], {optional: true}),
            query(':leave', [
                style({opacity: 1}),
                animate('150ms ease-out', style({opacity: 0}))
            ], {optional: true})
        ])
    ]);
