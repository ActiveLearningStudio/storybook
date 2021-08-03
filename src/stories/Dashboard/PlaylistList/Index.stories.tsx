import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Index } from './Index.js'

export default {
  title: 'Dashboard/PlaylistList',
  component: Index,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template = () => <Index />;


const component = Template.bind({});
