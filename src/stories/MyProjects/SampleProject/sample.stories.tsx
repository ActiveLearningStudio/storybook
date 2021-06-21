import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Sample } from './sample.js';

export default {
  title: 'My Projects/SampleProject',
  component: Sample,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template = () => <Sample />;


export const component = Template.bind({});
