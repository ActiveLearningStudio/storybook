import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Myprofile } from './myprofile.js';

export default {
  title: 'Header/Myprofile',
  component: Myprofile,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template = () => <Myprofile />;


export const component = Template.bind({});
