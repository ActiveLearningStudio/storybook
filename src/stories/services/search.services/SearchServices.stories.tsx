import React from 'react';
import { Story, Meta } from '@storybook/react';

import { SearchServices } from './SearchServices.js';

export default {
  title: 'Services/SearchServices',
  component: SearchServices,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template = () => <SearchServices />;


export const component = Template.bind({});
