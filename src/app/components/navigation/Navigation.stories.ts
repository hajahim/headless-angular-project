import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { RouterModule } from '@angular/router';

import { NavigationComponent } from './navigation.component';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Components/Accessibility/Navigation',
  component: NavigationComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        NavigationComponent
      ],
      imports: [
        RouterModule
      ],
    }),
  ]
} as Meta;

const Template: Story<NavigationComponent> = args => ({
  props: args,
});

export const navigation = Template.bind({});
navigation.args = {
  title: 'Navigation title',
  items: [
    {
      label: 'Navigation item 1',
      url: '/'
    },
    {
      label: 'Navigation item 2',
      url: '/'
    }
  ],
};