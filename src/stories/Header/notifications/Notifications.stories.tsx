import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Notifications } from './notifications.js';

export default {
  title: 'Header/Notifications',
  component: Notifications,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template = () => <Notifications  />;


export const component = Template.bind({});
