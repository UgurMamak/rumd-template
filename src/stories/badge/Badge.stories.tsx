import type { Meta, StoryObj } from '@storybook/react';
import Badge, { IBadge } from '../../components/badge/badge';

const meta: Meta<IBadge> = {
  title: 'Components/Badge',
  component: Badge,
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Primary: Story = (args: { text: string }) => {
  return <Badge {...args} />;
};

Primary.args = {
  text: 'Primary Badge',
};

export const Secondary: Story = (args: { text: string }) => {
  return <Badge {...args} />;
};

Secondary.args = {
  text: 'Secondary Badge',
};
