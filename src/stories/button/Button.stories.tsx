// Replace your-framework with the name of your framework
import type { Meta, Story } from '@storybook/react';

import Button from '../../components/button/button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
};

export default meta;

export const Primary: Story = (args, config) => {
  console.log('config=', config);

  const clickEvent = (event:React.MouseEvent<HTMLElement>) => {
    console.log('clickEvent', event);
  };

  return (
    <div>
      <Button onClick={(e)=>clickEvent(e)} text={args.text}></Button>
      <Button onClick={args.onClick} text={args.text}></Button>
    </div>
  );
};

Primary.argTypes = {
  text: {
    control: {
      type: 'text'
    }
  },
  onClick: { action: 'clicked' }
};

Primary.args = {
  text: 'primary-button'
};