import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Error } from './error.js';

export default {
  title: 'Services/Error',
  component: Error,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template = () => <Error />;


export const component = Template.bind({});
