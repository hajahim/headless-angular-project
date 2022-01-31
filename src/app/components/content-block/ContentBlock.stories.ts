import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { ContentBlockComponent } from './content-block.component';
import { UtilsModule } from 'src/app/utils/utils.module';
import { CommonModule } from '@angular/common';
import { RichTextDirective } from 'src/app/lib/components/rich-text/rich-text.directive';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Components/Presentation',
  component: ContentBlockComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        ContentBlockComponent,
        RichTextDirective
      ],
      imports: [
        CommonModule,
        UtilsModule
      ],
    }),
  ]
} as Meta;

const Template: Story<ContentBlockComponent> = args => ({
  props: args
});

export const contentBlock = Template.bind({});
contentBlock.args = {
  heading: {
    type: 'h1',
    value: 'Block Heading'
  },
  description: '<p> Rich text value </p>'
  + '<ul>'
    + '<li> item 1 </li>'
    + '<li> item 2 </li>'
  + '</ul>'
};