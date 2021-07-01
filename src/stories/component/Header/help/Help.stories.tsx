import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Help } from './help.js';

export default {
  title: 'component/Header/Help',
  component: Help,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template = () => <Help />;


export const component = Template.bind({});
