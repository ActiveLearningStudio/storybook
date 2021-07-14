import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Resource } from './resource.js';

export default {
  title: 'Store/Reducers/Resource',
  component: Resource,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template = () => <Resource />;


export const component = Template.bind({});
