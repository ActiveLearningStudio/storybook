import React from 'react';
import { Story, Meta } from '@storybook/react';

import { AdminServices } from './adminServices.js';

export default {
  title: 'Services/AdminServices',
  component: AdminServices,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template = () => <AdminServices />;


export const component = Template.bind({});
