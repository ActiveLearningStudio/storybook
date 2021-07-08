import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Ga } from './ga.js';

export default {
  title: 'Trackers/Ga',
  component: Ga,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template = () => <Ga />;


export const component = Template.bind({});
