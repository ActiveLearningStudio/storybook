import React from 'react';
import { Story, Meta } from '@storybook/react';

import { CanvaServices } from './CanvaServices.js';

export default {
  title: 'Services/CanvaServices',
  component: CanvaServices,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template = () => <CanvaServices />;


export const component = Template.bind({});
