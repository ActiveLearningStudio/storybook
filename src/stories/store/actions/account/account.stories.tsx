import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Account } from './account.js';

export default {
  title: 'Store/Actions/Account',
  component: Account,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template = () => <Account />;


export const component = Template.bind({});
