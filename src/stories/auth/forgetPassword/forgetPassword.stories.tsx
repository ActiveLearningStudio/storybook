import React from 'react';
import { Story, Meta } from '@storybook/react';

import { ForgetPassword } from './forgetPassword.js'

export default {
  title: 'Auth/ForgetPasswordPage',
  component: ForgetPassword,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template = () => <ForgetPassword />;


export const component = Template.bind({});
