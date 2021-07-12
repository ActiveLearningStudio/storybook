import React from 'react';
import { Story, Meta } from '@storybook/react';

import { StorageServices } from './StorageServices.js';

export default {
  title: 'Services/StorageServices',
  component: StorageServices,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template = () => <StorageServices />;


export const component = Template.bind({});
