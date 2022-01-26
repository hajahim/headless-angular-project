import { OnInit, Component, OnDestroy } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { Subscription } from "rxjs";
import { RoutingState } from "../routingState";

@Component({
  selector: 'app-rendering',
  templateUrl: './rendering-component.html',
})

export class RenderingComponent implements OnInit, OnDestroy {

  state: RoutingState;
  subscription: Subscription;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.subscription = this.activatedRoute.data.subscribe((currentRoute) => {
      console.warn(currentRoute)
    });
  }

  ngOnDestroy() {
    // important to unsubscribe when the component is destroyed
    this.subscription.unsubscribe();
  }

}