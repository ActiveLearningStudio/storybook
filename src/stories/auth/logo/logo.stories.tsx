import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Logo } from './logo.js'

export default {
  title: 'Auth/Logo',
  component: Logo,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template = () => <Logo />;


export const component = Template.bind({});
