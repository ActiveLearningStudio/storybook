import React from 'react';
import { Story, Meta } from '@storybook/react';

import { NotiArea } from './notiArea.js'

export default {
  title: 'Notification/NotificationArea',
  component: NotiArea,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template = () => <NotiArea />;


export const component = Template.bind({});
