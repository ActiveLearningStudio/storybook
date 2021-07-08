import React from 'react';
import { Story, Meta } from '@storybook/react';

import { AuthServices } from './authServices.js';

export default {
  title: 'Services/AuthServices',
  component: AuthServices,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template = () => <AuthServices />;


export const component = Template.bind({});
