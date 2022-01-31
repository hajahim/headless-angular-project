import { Component, Input } from "@angular/core";

export class NavigationItem {
  label: string;
  url: string;
}

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html'
})

export class NavigationComponent {
  @Input() title: string;
  @Input() items: NavigationItem[];
}