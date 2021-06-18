import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Subscription } from './subscription.js';

export default {
  title: 'Header/Subscription',
  component: Subscription,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template = () => <Subscription />;


export const component = Template.bind({});
