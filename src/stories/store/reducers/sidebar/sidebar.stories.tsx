import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Sidebar } from './sidebar.js';

export default {
  title: 'Store/Reducers/Sidebar',
  component: Sidebar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template = () => <Sidebar />;


export const component = Template.bind({});
