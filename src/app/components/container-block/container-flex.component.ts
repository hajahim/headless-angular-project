import { Component, Input } from "@angular/core";
import { YieldsComponent } from "src/app/routing/yields";

@Component({
  selector: 'container-flex',
  templateUrl: './container-flex.component.html',
  styleUrls: ['./container-flex.scss']
})

export class ContainerFlexComponent {
  @Input() numberOfColumn: number;
  @Input() rendering: YieldsComponent;
}