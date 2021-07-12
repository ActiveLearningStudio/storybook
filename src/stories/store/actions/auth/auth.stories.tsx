import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Auth } from './auth.js';

export default {
  title: 'Store/Actions/Auth',
  component: Auth,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template = () => <Auth />;


export const component = Template.bind({});
