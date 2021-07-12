import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Ui } from './ui.js';

export default {
  title: 'Store/Actions/Ui',
  component: Ui,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template = () => <Ui />;


export const component = Template.bind({});
