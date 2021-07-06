import React from 'react';
import { Story, Meta } from '@storybook/react';

import { EmbedProject } from './EmbedProject.js';

export default {
  title: 'Component/SharePreviewPopup/EmbedProject',
  component: EmbedProject,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template = () => <EmbedProject/>;


export const component = Template.bind({});
