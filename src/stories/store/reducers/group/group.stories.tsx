import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Group } from './group.js';

export default {
  title: 'Store/Reducers/Group',
  component: Group,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template = () => <Group />;


export const component = Template.bind({});
