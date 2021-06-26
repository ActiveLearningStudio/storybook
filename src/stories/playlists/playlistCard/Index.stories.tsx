import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Index } from './index.js';

export default {
  title: 'PlayLists/PlaylistCard',
  component: Index,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template = () => <Index />;


export const index = Template.bind({});