import React from 'react';
import { Story, Meta } from '@storybook/react';

import { PreviousLink } from './PreviousLink.js'

export default {
  title: 'Preview/PlaylistPreview/Component/PreviousLink',
  component: PreviousLink,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template = () => <PreviousLink />;


export const component = Template.bind({});
