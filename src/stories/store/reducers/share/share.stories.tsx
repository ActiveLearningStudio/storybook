import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Share } from './share.js';

export default {
  title: 'Store/Reducers/Share',
  component: Share,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template = () => <Share />;


export const component = Template.bind({});
