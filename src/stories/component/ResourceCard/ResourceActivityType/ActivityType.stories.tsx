import React from 'react';
import { Story, Meta } from '@storybook/react';

import { ActivityType } from './ActivityType.js';

export default {
  title: 'Component/ResourceCard/AddResource/ResourceActivityType',
  component: ActivityType,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template = () => <ActivityType />;


export const component = Template.bind({});
