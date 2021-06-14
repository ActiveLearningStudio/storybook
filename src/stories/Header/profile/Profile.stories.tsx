import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Profile } from './profile.js';

export default {
  title: 'Header/Profile',
  component: Profile,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template = () => <Profile  />;


export const component = Template.bind({});
