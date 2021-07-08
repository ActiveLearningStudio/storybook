import React from 'react';
import { Story, Meta } from '@storybook/react';

import { LmsCourse } from './lmsCourse.js'

export default {
  title: 'Logic/LmsCourse',
  component: LmsCourse,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template = () => <LmsCourse />;


export const component = Template.bind({});
