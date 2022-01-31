import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

export class NavigationItem {
  label: string;
  url: string;
}

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html'
})

export class NavigationComponent implements OnChanges {
  @Input() title: string;
  @Input() items: NavigationItem[];

  ngOnChanges(changes: SimpleChanges): void {
      console.warn(this.title)
  }
}