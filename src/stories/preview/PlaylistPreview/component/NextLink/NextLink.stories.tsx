import React from 'react';
import { Story, Meta } from '@storybook/react';

import { NextLink } from './NextLink.js'

export default {
  title: 'Preview/PlaylistPreview/Component/NextLink',
  component: NextLink,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template = () => <NextLink />;


export const component = Template.bind({});
