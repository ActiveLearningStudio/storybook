import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Dashboard } from './dashboard.js';

export default {
  title: 'Store/Reducers/Dashboard',
  component: Dashboard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template = () => <Dashboard />;


export const component = Template.bind({});
