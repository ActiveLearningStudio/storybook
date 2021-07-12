import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Search } from './search.js';

export default {
  title: 'Store/Actions/Search',
  component: Search,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template = () => <Search />;


export const component = Template.bind({});
