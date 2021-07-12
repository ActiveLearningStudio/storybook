import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Lms } from './genericLMS';

export default {
  title: 'Store/Actions/LMS/genericLMS',
  component: Lms,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template = () => <Lms />;


export const component = Template.bind({});
