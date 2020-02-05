import { Router, Event, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'edwinsoftwaredev-portafolio';
  isHome: boolean;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        if (event.urlAfterRedirects.trim() === '/') {
          // focus home button
          this.isHome = true;
        } else {
          this.isHome = false;
        }
      }
    });

    if (!this.router.routerState.snapshot.url) {
      this.isHome = true;
    } else {
      this.isHome = false;
    }
  }
}
