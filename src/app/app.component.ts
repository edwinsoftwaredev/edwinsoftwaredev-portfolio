import { Router, Event, NavigationEnd } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'edwinsoftwaredev-portafolio';
  isHome: boolean;
  isStarting = true;
  isMenuShown = true;

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
          this.isHome = false;
          this.isMenuShown = false;
        }
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
  }

  hideMenu() {
    this.isMenuShown = false;
  }
}
