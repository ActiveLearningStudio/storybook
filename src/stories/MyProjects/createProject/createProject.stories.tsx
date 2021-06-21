import React from 'react';
import { Story, Meta } from '@storybook/react';

import { CreateProject } from './createProject.js';

export default {
  title: 'My Projects/CreateProjectPopup',
  component: CreateProject,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template = () => <CreateProject />;


export const index = Template.bind({});
