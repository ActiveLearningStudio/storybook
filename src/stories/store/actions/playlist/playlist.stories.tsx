import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Playlist } from './playlist.js';

export default {
  title: 'Store/Actions/Playlist',
  component: Playlist,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template = () => <Playlist />;


export const component = Template.bind({});
