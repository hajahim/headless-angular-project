import { Component, Input } from "@angular/core";

class Heading {
  type: string;
  value: string;
}

@Component({
  selector: 'content-block',
  templateUrl: './content-block.component.html'
})

export class ContentBlockComponent {
  @Input() heading: Heading;
  @Input() description: string;
}