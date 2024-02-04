import type { Meta, StoryObj, Story } from '@storybook/react';

type Story = StoryObj<typeof Component>;


export const storyTemplate = <P,>(Component: (props: P) => any) => (
  props: P
): Story<P> => {
  const template: Story<typeof Component> = (args) => Component(args);
  const story = template.bind({});
  story.args = props;
  return story;
}