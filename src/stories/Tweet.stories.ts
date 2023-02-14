import { Story, Meta } from '@storybook/angular/types-6-0';
import { TweetComponent as Tweet } from '../app/tweet/tweet.component';

export default {
  title: 'Component/Tweet',
  component: Tweet,
  argTypes: {}
} as Meta;

const Template: Story<Tweet | { ngContent: unknown }> = (args: Tweet | { ngContent: unknown }) => ({
  props: args,
  template: `
    <div class='bg-blue-300 w-screen h-screen absolute top-0 left-0'>
      <app-tweet
        [avatar]='avatar'
        [name]='name'
        [date]='date'
        [handle]='handle'
      >
        {{ngContent}}
      </app-tweet>
    </div>`,
});

export const Example = Template.bind({});

Example.args = {
  name: 'John Smith',
  avatar: 'https://images.unsplash.com/photo-1508280756091-9bdd7ef1f463?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1832&q=80',
  handle: '@johnsmith0345',
  date: 'Apr 12, 2022',
  ngContent: 'This is a template test.'
};

/*export const Primary = Template.bind({});
Primary.args = {
  color: 'primary'
} as Partial<Tweet>;*/
