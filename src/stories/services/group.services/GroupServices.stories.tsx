import React from 'react';
import { Story, Meta } from '@storybook/react';

import { GroupServices } from './GroupServices.js';

export default {
  title: 'Services/GroupServices',
  component: GroupServices,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template = () => <GroupServices />;


export const component = Template.bind({});
