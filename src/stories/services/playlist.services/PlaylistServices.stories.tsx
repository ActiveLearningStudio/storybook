import React from 'react';
import { Story, Meta } from '@storybook/react';

import { PlaylistServices } from './PlaylistServices.js';

export default {
  title: 'Services/PlaylistServices',
  component: PlaylistServices,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template = () => <PlaylistServices />;


export const component = Template.bind({});
