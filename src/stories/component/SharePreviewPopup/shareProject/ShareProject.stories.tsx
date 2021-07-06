import React from 'react';
import { Story, Meta } from '@storybook/react';

import { ShareProject } from './ShareProject.js';

export default {
  title: 'Component/SharePreviewPopup/ShareProject',
  component: ShareProject,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template = () => <ShareProject/>;


export const component = Template.bind({});
