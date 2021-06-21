import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Card } from './card.js';

export default {
  title: 'My Projects/ProjectCard',
  component: Card,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template = () => <Card />;


export const component = Template.bind({});
