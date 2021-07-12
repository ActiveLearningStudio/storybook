import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Gapi } from './gapi.js';

export default {
  title: 'Store/Actions/Gapi',
  component: Gapi,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template = () => <Gapi />;


export const component = Template.bind({});
