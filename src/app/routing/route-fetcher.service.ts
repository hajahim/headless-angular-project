import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { first, Observable, map } from 'rxjs';

import { RoutingState } from './routingState';
import { IDataProvider, DataQuery } from '../data/data.provider';

@Injectable()

export class RouteFetcher implements Resolve<RoutingState> {

  query: DataQuery = {
    table: 'pages'
  };

  constructor(private dataProvider: IDataProvider) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<RoutingState> {
    this.query.condition = [];
    this.query.condition.push({
      key: 'url',
      value: route.params['url']
    });
    const routes = this.dataProvider.get(this.query)
      .pipe(first())
      .pipe(map(results => results[0]))
    return routes;
  }
}