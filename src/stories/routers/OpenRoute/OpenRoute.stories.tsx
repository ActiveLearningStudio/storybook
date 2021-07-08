import React from 'react';
import { Story, Meta } from '@storybook/react';

import { OpenRoute } from './OpenRoute.js';

export default {
  title: 'Routers/OpenRoute',
  component: OpenRoute,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template = () => <OpenRoute />;


export const component = Template.bind({});
