import { InjectionToken, Type } from "@angular/core";
import { ComponentEntry } from "../../lib.module";

export const YIELDS_COMPONENTS = new InjectionToken<ComponentEntry[]>(
  'yield.factory.components'
);

export const YIELDS_UNREFERENCED_COMPONENTS = new InjectionToken<Type<unknown>>(
  'yields.factory.components.unreference'
)