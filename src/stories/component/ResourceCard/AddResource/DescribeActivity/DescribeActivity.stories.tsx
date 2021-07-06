import React from 'react';
import { Story, Meta } from '@storybook/react';

import { DescribeActivity } from './DescribeActivity.js';

export default {
  title: 'Component/ResourceCard/AddResource/ResourceDescribeActivity',
  component: DescribeActivity,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template = () => <DescribeActivity />;


export const component = Template.bind({});
