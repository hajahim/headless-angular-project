import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NavigationComponent } from "./navigation/navigation.component";
import { ContainerFlexComponent } from "./container-block/container-flex.component";
import { ContentBlockComponent } from "./content-block/content-block.component";
import { LibraryModule } from "../lib/lib.module";
import { UtilsModule } from "../utils/utils.module";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    LibraryModule.registerComponent([
      { tag: 'ContainerFlex', instance: ContainerFlexComponent },
      { tag: 'Navigation', instance: NavigationComponent },
      { tag: 'ContentBlock', instance: ContentBlockComponent }
    ]),
    CommonModule,
    UtilsModule,
    RouterModule
  ],
  declarations: [
    ContainerFlexComponent,
    NavigationComponent,
    ContentBlockComponent
  ]
})

export class ComponentsModule { }