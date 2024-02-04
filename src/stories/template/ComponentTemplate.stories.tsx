// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from '@storybook/react';

import Button  from '../../components/button/button';

const meta: Meta<typeof Button> = {
  title:'Template/Button',
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

interface IStory {
  text: string
}

export const Primary: Story = (args:IStory) => {
  // https://storybook.js.org/docs/essentials/controls#annotation

  // ***
  // https://storybook.js.org/docs/api/arg-types#argtypes


 // https://storybook.js.org/docs/api/arg-types#defaultvalue

 // defaultValue kullanımı kaldırıldı.
    return (
      <div>
        <Button text={args.text}></Button>
      </div>
    );
};

Primary.argTypes = {
  variant: {
    options: ['primary', 'secondary'],
    control: { type: 'radio', default: 'secondary', sort: 'requiredFirst'  },
  },
  meshColors: {
    control: {
      type: 'color',
      presetColors: ['#ff0000', '#00ff00', '#0000ff'],
    },
  },
  revisionDate: {
    control: 'date',
  },
  rotationAxis: {
    control: 'check',
    options: ['x', 'y', 'z'],
  },
  value: {
    control: 'text',
    variant:'deneme ',
    description:'ugur',
    default:'denmeeeeee'
  },
  value2: {
    control:{type:'text'},
    variant:'deneme ',
    description:'ugur',
    default:'denmeeeeee',
    table: {
      defaultValue: { summary:'ugur' }
    },
  },
  scaling: {
    control: 'select',
    options: [10, 50, 75, 100, 200],
  },
  canRotate: {
    control: 'boolean',
  },
  width: {
    control: { type: 'number', min: 400, max: 1200, step: 50 },
  },
  height: {
    control: { type: 'range', min: 200, max: 1500, step: 50 },
  },
  rawData: {
    control: 'object',
  },
};

Primary.args = {
  value2: 'ugur-mamamamamamammama'
};