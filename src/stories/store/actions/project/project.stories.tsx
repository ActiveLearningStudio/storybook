import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Project } from './project.js';

export default {
  title: 'Store/Actions/Project',
  component: Project,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template = () => <Project />;


export const component = Template.bind({});
