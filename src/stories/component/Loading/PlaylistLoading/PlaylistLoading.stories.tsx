import React from 'react';
import { Story, Meta } from '@storybook/react';

import { PlaylistLoading } from './PlaylistLoading.js';

export default {
  title: 'Component/Loading/PlaylistLoading',
  component: PlaylistLoading,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template = () => <PlaylistLoading/>;


export const component = Template.bind({});
