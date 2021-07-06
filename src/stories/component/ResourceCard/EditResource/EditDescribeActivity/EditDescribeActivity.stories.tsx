import React from 'react';
import { Story, Meta } from '@storybook/react';

import { DescribeActivity } from './EditDescribeActivity.js';

export default {
  title: 'Component/ResourceCard/EditResource/ResourceDescribeActivity',
  component: DescribeActivity,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template = () => <DescribeActivity />;


export const component = Template.bind({});
