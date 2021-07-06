import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Dropdown } from './dropdown';

export default {
  title: 'Component/ResourceCard/ResourceCardDropdown',
  component: Dropdown,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template = () => <Dropdown/>;


export const component = Template.bind({});
