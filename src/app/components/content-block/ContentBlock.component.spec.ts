import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RichTextDirective } from 'src/app/lib/components/rich-text/rich-text.directive';
import { UtilsModule } from 'src/app/utils/utils.module';

import { ContentBlockComponent, Heading } from './content-block.component';

describe('ContentBlockComponent', () => {
  let component: ContentBlockComponent;
  let fixture: ComponentFixture<ContentBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ContentBlockComponent,
        RichTextDirective
    ],
      imports: [ CommonModule, UtilsModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentBlockComponent);
    component = fixture.componentInstance;
  });

  it('should render heading tag dynamically', () => {
    const heading = new Heading();
    heading.type = 'h2';
    heading.value = 'heading test';
    component.heading = heading;
    fixture.detectChanges();
    const contentBlockElement: HTMLElement = fixture.nativeElement;
    const headingElement = contentBlockElement.querySelector(heading.type);
    expect(headingElement).toBeTruthy();
    expect(headingElement?.textContent).toEqual(heading.value);
  });

});
