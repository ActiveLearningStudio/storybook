import React from 'react';
import { Story, Meta } from '@storybook/react';

import { SelectActivity } from './EditSelectActivity.js';

export default {
  title: 'Component/ResourceCard/EditResource/ResourceSelectActivity',
  component: SelectActivity,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template = () => <SelectActivity />;


export const component = Template.bind({});
