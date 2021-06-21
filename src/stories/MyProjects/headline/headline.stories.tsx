import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Headline } from './headline.js';

export default {
  title: 'My Projects/Headline',
  component: Headline,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template = () => <Headline />;


export const component = Template.bind({});
