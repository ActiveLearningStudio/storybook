import React from 'react';
import { Story, Meta } from '@storybook/react';

import { ChangePassword } from './ChangePassword.js';

export default {
  title: 'Profile/ChangePasswordPage',
  component: ChangePassword,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template = () => <ChangePassword />;


export const component = Template.bind({});
