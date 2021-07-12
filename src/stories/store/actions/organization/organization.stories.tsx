import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Organization } from './organization.js';

export default {
  title: 'Store/Actions/Organization',
  component: Organization,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template = () => <Organization />;


export const component = Template.bind({});
