import React from 'react';
import { Story, Meta } from '@storybook/react';

import { ProjectServices } from './ProjectServices.js';

export default {
  title: 'Services/ProjectServices',
  component: ProjectServices,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template = () => <ProjectServices />;


export const component = Template.bind({});
