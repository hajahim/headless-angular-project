import { NgModule } from '@angular/core';
import { RouterModule, Routes, UrlSegment, UrlMatchResult } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';
import { ServerErrorComponent } from './server-error/server-error.component';
import { RenderingComponent } from './rendering/rendering-component';
import { RouteFetcher } from './route-fetcher.service';
import { Route, RouteService } from './route.service';
import { BrowserModule } from '@angular/platform-browser';

export function RouteFinder(url: UrlSegment[]): UrlMatchResult {
  const routeService = new RouteService();
  const routeParameters = routeService.extractRouteParameters(url.map((segment) => segment.toString()));
  if (routeParameters == null)
    return null as unknown as UrlMatchResult;

  const posParams: { [key: string]: UrlSegment } = {}

  Object.keys(routeParameters).forEach((key) => {
    posParams[key] = new UrlSegment(routeParameters[key as keyof Route], {});
  });
  
  return {
    consumed: url,
    posParams
  };
}

const applicationRoutes: Routes = [
  { path: 'notfound', component: NotFoundComponent },
  { path: 'error', component: ServerErrorComponent },
  {
    matcher: RouteFinder,
    component: RenderingComponent,
    resolve: {
      routeState: RouteFetcher
    },
    runGuardsAndResolvers: 'always',
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(applicationRoutes, { onSameUrlNavigation: 'reload', initialNavigation: 'enabled' }),
    BrowserModule
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    NotFoundComponent,
    ServerErrorComponent
  ],
  providers: [
    RouteFetcher,
    RouteService
  ]
})

export class RoutingModule { }