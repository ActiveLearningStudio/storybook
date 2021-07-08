import React from 'react';
import { Story, Meta } from '@storybook/react';

import { PrivateRoute } from './PrivateRoute.js';

export default {
  title: 'Routers/PrivateRoute',
  component: PrivateRoute,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template = () => <PrivateRoute />;


export const component = Template.bind({});
