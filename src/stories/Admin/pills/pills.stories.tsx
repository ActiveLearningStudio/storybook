import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Pills } from './pills.js';

export default {
  title: 'Admin/pills',
  component: Pills,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template = () => <Pills />;


export const component = Template.bind({});
