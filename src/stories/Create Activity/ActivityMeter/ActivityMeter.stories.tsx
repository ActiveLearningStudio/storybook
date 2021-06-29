import React from 'react';
import { Story, Meta } from '@storybook/react';

import { ActivityMeter } from './ActivityMeter.js';

export default {
  title: 'Create Activity/ActivityMeter',
  component: ActivityMeter,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template = () => <ActivityMeter />;


export const component = Template.bind({});
