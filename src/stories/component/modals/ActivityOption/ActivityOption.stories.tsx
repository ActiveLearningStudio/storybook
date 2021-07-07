import React from 'react';
import { Story, Meta } from '@storybook/react';

import { ActivityOption } from './ActivityOption.js';

export default {
  title: 'Component/Modals/ActivityOptions',
  component: ActivityOption,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template = () => <ActivityOption/>;


export const component = Template.bind({});
