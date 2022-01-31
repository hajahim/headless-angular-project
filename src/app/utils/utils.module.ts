import { NgModule } from "@angular/core";
import { ObjectKeysPipe } from "./object-keys.pipe";

@NgModule({
  declarations: [
    ObjectKeysPipe
  ],
  exports: [
    ObjectKeysPipe
  ]
})

export class UtilsModule { }