import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Index } from './index.js';

export default {
  title: 'Component/DeletePopup/Index',
  component: Index,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template = () => <Index />;


export const component = Template.bind({});
