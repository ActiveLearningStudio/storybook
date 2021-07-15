import React from 'react';
import { Story, Meta } from '@storybook/react';

import { GoogleLogin } from './GoogleLogin';

export default {
  title: 'Component/Modals/GoogleLoginModal',
  component: GoogleLogin,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template = () => <GoogleLogin/>;


export const component = Template.bind({});
