import { routeComponentsAnimation } from './routing-animation';
import { Router, Event, NavigationEnd, RouterOutlet, NavigationStart } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeComponentsAnimation]
})
export class AppComponent implements OnInit {
  title = 'edwinsoftwaredev-portafolio';
  isHome: boolean;
  isStarting = true;
  isMenuShown = true;
  animationOff = true;
  backgroundBlured = false;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        if (event.urlAfterRedirects.trim() === '/') {
          // focus home button
          this.isHome = true;
          this.isMenuShown = true;
        } else {
          document.getElementsByClassName('background')[0].scrollTop = 0;
          document.scrollingElement.scrollTop = 0;

          this.isHome = false;
          this.isMenuShown = false;
        }
      }

      if (event instanceof NavigationStart) {
        this.backgroundBlured = true;

        setTimeout(() => {
          this.backgroundBlured = false;
        }, 300);
      }
    });

    if (!this.router.routerState.snapshot.url) {
      this.isHome = true;
      this.isMenuShown = true;
    } else {
      this.isHome = false;
      this.isMenuShown = false;
    }

    // check if there is a lifecycle hook for this
    setTimeout(() => {
      this.isStarting = false;
    }, 1200);
  }

  showMenu() {
    this.isMenuShown = true;
    this.animationOff = false;
  }

  hideMenu() {
    this.animationOff = false;
    this.isMenuShown = false;
  }

  prepareRoute(outlet: RouterOutlet) {
    return this.isHome || (outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation);
  }
}
