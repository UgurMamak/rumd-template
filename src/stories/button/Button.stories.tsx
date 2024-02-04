// Replace your-framework with the name of your framework
import type { Meta, Story } from '@storybook/react';

import Button from '../../components/button/button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
};

export default meta;

export const Primary: Story = (args, config) => {
  console.log(config);
  return (
    <div>
      <Button text={args.text}></Button>
    </div>
  );
};

Primary.argTypes = {
  text: {
    control: {
      type: 'text'
    }
  }
};

Primary.args = {
  text: 'primary-button'
};