import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class NavigationService {
  constructor(private router: Router) {}

  /**
   * `navigate()` for routing navigation
   * @param route (string) the url to navigate to
   */
  navigate(route: any[]) {
    this.router.navigate(route);
  }

  /**
   * `getCurrentRoute()` get the current route
   * @returns the current url
   */
  getCurrentRoute(): string {
    return this.router.url;
  }
}
