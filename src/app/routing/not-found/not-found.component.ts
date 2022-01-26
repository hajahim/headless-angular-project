import { Component, Input } from '@angular/core';
import { RoutingException } from '../routingException';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
})

export class NotFoundComponent {
  @Input() information: RoutingException = {};
}