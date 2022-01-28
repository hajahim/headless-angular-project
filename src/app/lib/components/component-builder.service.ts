import { Inject, Injectable, Type, ComponentFactory } from "@angular/core";
import { ComponentEntry } from "../lib.module";
import { YIELDS_COMPONENTS, YIELDS_UNREFERENCED_COMPONENTS } from "./yields/yields.token";

export interface ComponentInstance {
  instance?: Type<any>;
  componentName: string;
}

@Injectable()

export class ComponentBuilderService {
  private componentTree: Map<string, Type<unknown>>;

  constructor(
    @Inject(YIELDS_COMPONENTS) private components : ComponentEntry[],
    @Inject(YIELDS_UNREFERENCED_COMPONENTS) private unReferenceComponent: Type<unknown>
  ) {
    this.componentTree = new Map();
    this.components.forEach(component => this.componentTree.set(component.tag, component.instance));
  }

  getComponentByName (name: string): ComponentInstance {
    let component = this.componentTree.get(name);
    if (!component) {
      component = this.unReferenceComponent;
    }
    return {
      instance: component,
      componentName: name
    }
  }
}