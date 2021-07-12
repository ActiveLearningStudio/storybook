import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Metrics } from './metrics.js';

export default {
  title: 'Store/Actions/Metrics',
  component: Metrics,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template = () => <Metrics />;


export const component = Template.bind({});
