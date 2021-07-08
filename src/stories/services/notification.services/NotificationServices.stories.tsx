import React from 'react';
import { Story, Meta } from '@storybook/react';

import { NotificationServices } from './NotificationServices.js';

export default {
  title: 'Services/NotificationServices',
  component: NotificationServices,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template = () => <NotificationServices />;


export const component = Template.bind({});
