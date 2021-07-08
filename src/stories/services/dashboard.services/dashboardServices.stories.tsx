import React from 'react';
import { Story, Meta } from '@storybook/react';

import { DashboardServices } from './dashboardServices';

export default {
  title: 'Services/DashboardServices',
  component: DashboardServices,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template = () => <DashboardServices />;


export const component = Template.bind({});
