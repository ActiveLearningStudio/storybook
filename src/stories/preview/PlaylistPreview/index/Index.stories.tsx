import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Index } from './Index.js'

export default {
  title: 'Preview/PlaylistPreview/Index',
  component: Index,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template = () => <Index />;


export const component = Template.bind({});
