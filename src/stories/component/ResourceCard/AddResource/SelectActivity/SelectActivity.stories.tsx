import React from 'react';
import { Story, Meta } from '@storybook/react';

import { SelectActivity } from './SelectActivity.js';

export default {
  title: 'Component/ResourceCard/AddResource/ResourceSelectActivity',
  component: SelectActivity,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template = () => <SelectActivity />;


export const component = Template.bind({});
