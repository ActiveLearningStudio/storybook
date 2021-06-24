import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Dropdown } from './dropdown.js';

export default {
  title: 'PlayLists/Dropdown',
  component: Dropdown,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template = () => <Dropdown />;


export const compoenent = Template.bind({});
