import { Component, Input } from "@angular/core";

export class Heading {
  type: string;
  value: string;
}

@Component({
  selector: 'content-block',
  templateUrl: './content-block.component.html'
})

export class ContentBlockComponent {
  @Input() heading: Heading = new Heading();
  @Input() description: string;
}