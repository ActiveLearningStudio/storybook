import React from 'react';
import { Story, Meta } from '@storybook/react';

import { ProjectLoading } from './ProjectLoading.js';

export default {
  title: 'Component/Loading/ProjectLoading',
  component: ProjectLoading,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template = () => <ProjectLoading/>;


export const component = Template.bind({});
