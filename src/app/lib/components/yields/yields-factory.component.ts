import { Component, Input, OnInit, ViewChild, ViewContainerRef, Type } from "@angular/core";
import { RoutingState } from "src/app/routing/routingState";
import { YieldsRecord, YieldsComponent } from "src/app/routing/yields";
import { ComponentBuilderService } from "../component-builder.service";

@Component({
  selector: 'yield-factory',
  templateUrl: './yields-factory.component.html'
})

export class YieldsFactoryComponent implements OnInit {
  @ViewChild('portal', { read: ViewContainerRef, static: true }) private portal: ViewContainerRef;
  @Input() key?: string;
  @Input() context?: RoutingState;

  constructor(
    private componentBuilder: ComponentBuilderService
  ) { }

  ngOnInit(): void {
    this.render();
  }

  render () {
    const yields: YieldsRecord = this.context?.yields as YieldsRecord;
    const yieldsComponents: Array<YieldsComponent> = this.getYieldsComponent(yields);
    yieldsComponents.forEach( (yieldComponent: YieldsComponent, index) => {
      const componentInstance = this.componentBuilder.getComponentByName(yieldComponent.componentName ?? '');
      this.portal.clear();
      const componentRef = this.portal.createComponent(componentInstance.instance as Type<any>);
      for ( let key in yieldComponent.data) {
        const dataValue = yieldComponent.data[key];
        componentRef.instance[key] = dataValue;
      }
      componentRef.instance.rendering = {
        componentName: yieldComponent.componentName,
        yields: yieldComponent.yields
      }
    });
  }

  getYieldsComponent (yields: YieldsRecord): Array<YieldsComponent>  {
    let result: Array<YieldsComponent> = [];
    for ( let yieldKey in yields) {
      let currentYield: YieldsComponent[] = yields[yieldKey];
      if (yieldKey === this.key) {
        result = currentYield;
        break;
      }
    }
    return result;
  }
}