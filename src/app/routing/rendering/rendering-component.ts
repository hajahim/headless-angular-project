import { OnInit, Component, OnDestroy } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { Subscription } from "rxjs";
import { RoutingState } from "../routingState";

enum Status {
  Render,
  NotFound,
  Error
}

@Component({
  selector: 'app-rendering',
  templateUrl: './rendering-component.html',
})

export class RenderingComponent implements OnInit, OnDestroy {

  state: RoutingState;
  renderingStatus: Status;
  subscription: Subscription;
  Status = Status;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.subscription = this.activatedRoute.data.subscribe((data) => {
      let routeData : RoutingState = data['routeState'];
      if (!routeData) {
        this.renderingStatus = Status.NotFound;
        return;
      }
      this.state = routeData;
      this.renderingStatus = Status.Render;
    });
  }

  ngOnDestroy() {
    // important to unsubscribe when the component is destroyed
    this.subscription.unsubscribe();
  }

}