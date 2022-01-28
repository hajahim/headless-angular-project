import { Component, Input } from "@angular/core";
import { YieldsComponent } from "src/app/routing/yields";

@Component({
  selector: 'unreference-component',
  templateUrl: './unreference.component.html'
})

export class UnreferenceComponent {
  @Input() rendering: YieldsComponent;
}