import { ModuleWithProviders, NgModule, Type } from "@angular/core";

import { ComponentBuilderService } from "./components/component-builder.service";
import { YieldsFactoryComponent } from "./components/yields/yields-factory.component";
import { UnreferenceComponent } from "./components/unreference/unreference.component";
import { RichTextDirective } from "./components/rich-text/rich-text.directive";
import { YIELDS_COMPONENTS, YIELDS_UNREFERENCED_COMPONENTS } from "./components/yields/yields.token";

export class ComponentEntry {
  tag: string;
  instance: Type<unknown>;
}

@NgModule({
  exports: [
    YieldsFactoryComponent,
    RichTextDirective
  ],
  declarations: [
    YieldsFactoryComponent,
    RichTextDirective
  ]
})
  
export class LibraryModule {
  static registerComponent (
    components: ComponentEntry[],
  ): ModuleWithProviders<LibraryModule> {
    return {
      ngModule: LibraryModule,
      providers: [
        { provide: YIELDS_COMPONENTS, useValue: components },
        { provide: YIELDS_UNREFERENCED_COMPONENTS, useValue: UnreferenceComponent },
        ComponentBuilderService
      ]
    }
  }
}