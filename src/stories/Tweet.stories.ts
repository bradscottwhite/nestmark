import { Story, Meta } from '@storybook/angular/types-6-0';
import { TweetComponent as Tweet } from '../app/tweet/tweet.component';

export default {
  title: 'Component/Tweet',
  component: Tweet,
  argTypes: {}
} as Meta;

const Template: Story<Tweet> = (args: Tweet) => ({
  props: args,
  template: `
    <app-tweet >
      This is a template test.
    </app-tweet>`,
});

export const Example = Template.bind({});

/*export const Primary = Template.bind({});
Primary.args = {
  color: 'primary'
} as Partial<Tweet>;*/
