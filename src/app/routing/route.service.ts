import { Injectable } from '@angular/core';

export class Route {
  url: string;
}

@Injectable()

export class RouteService {

  extractRouteParameters(url: string[]): Route {
    const routeParameters = new Route();

    if (url.length === 0) {
      /* should return default value */
      routeParameters.url = '/';
      return routeParameters;
    }

    routeParameters.url = url.join('/');

    /* adding default value */
    if (!routeParameters.url.startsWith('/')) {
      routeParameters.url = '/' + routeParameters.url;
    }

    return routeParameters;
  }

}