import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Admin } from './admin.js';

export default {
  title: 'Store/Actions/Admin',
  component: Admin,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template = () => <Admin />;


export const component = Template.bind({});
