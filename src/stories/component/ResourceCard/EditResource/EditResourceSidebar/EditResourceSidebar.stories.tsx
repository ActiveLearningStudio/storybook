import React from 'react';
import { Story, Meta } from '@storybook/react';

import { ResourceSidbar } from './EditResourceSidebar.js';

export default {
  title: 'Component/ResourceCard/EditResource/EditResourceSidebar',
  component: ResourceSidbar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template = () => <ResourceSidbar/>;


export const component = Template.bind({});
