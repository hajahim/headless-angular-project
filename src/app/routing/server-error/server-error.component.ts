import { Component, Input } from '@angular/core';
import { RoutingException } from '../routingException';

@Component({
  selector: 'app-server-error',
  templateUrl: './server-error.component.html',
})
export class ServerErrorComponent {
  @Input() information: RoutingException = {};
}
