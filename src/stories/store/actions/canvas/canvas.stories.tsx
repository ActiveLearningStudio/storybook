import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Canvas } from './canvas.js';

export default {
  title: 'Store/Actions/Canvas',
  component: Canvas,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template = () => <Canvas />;


export const component = Template.bind({});
