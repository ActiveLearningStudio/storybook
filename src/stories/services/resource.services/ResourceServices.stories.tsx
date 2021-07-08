import React from 'react';
import { Story, Meta } from '@storybook/react';

import { ResourceServices } from './ResourceServices.js';

export default {
  title: 'Services/ResourceServices',
  component: ResourceServices,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template = () => <ResourceServices />;


export const component = Template.bind({});
