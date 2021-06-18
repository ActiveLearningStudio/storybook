import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Notification } from './notification.js';

export default {
  title: 'Header/notification',
  component: Notification,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template = () => <Notification />;


export const component = Template.bind({});
