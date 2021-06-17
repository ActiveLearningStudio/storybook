import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Controller } from './controller.js';

export default {
  title: 'Admin/Controller',
  component: Controller,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template = () => <Controller />;


export const component = Template.bind({});
