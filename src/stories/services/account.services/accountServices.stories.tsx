import React from 'react';
import { Story, Meta } from '@storybook/react';

import { AccountServices } from './accountservices.js';

export default {
  title: 'Services/AccountServices',
  component: AccountServices,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template = () => <AccountServices />;


export const component = Template.bind({});
