import { Directive, TemplateRef, ViewContainerRef, Input, SimpleChanges, EmbeddedViewRef } from "@angular/core";

@Directive({
  selector: '[richText]'
})

export class RichTextDirective {
  private viewRef: EmbeddedViewRef<unknown>;

  @Input('richText') content : string;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['content']) {
      if (!this.viewRef) {
        this.viewContainer.clear();
        this.viewRef = this.viewContainer.createEmbeddedView(this.templateRef);
      }
  
      this.refreshView();
    }
  }

  refreshView () {
    this.viewRef.rootNodes.forEach((node) => {
      node.innerHTML = this.content;
    });
  }
}