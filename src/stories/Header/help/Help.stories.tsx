import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Help } from './help';

export default {
  title: 'Header/Help',
  component: Help,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template = () => <Help  />;


export const Secondary = Template.bind({});