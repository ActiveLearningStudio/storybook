import React from 'react';
import { Story, Meta } from '@storybook/react';

import { PublicRoute } from './PublicRoute.js';

export default {
  title: 'Routers/PublicRoute',
  component: PublicRoute,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template = () => <PublicRoute />;


export const component = Template.bind({});
