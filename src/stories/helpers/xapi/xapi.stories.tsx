import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Xapi } from './xapi.js'

export default {
  title: 'helpers/Xapi',
  component: Xapi,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template = () => <Xapi />;


export const component = Template.bind({});
