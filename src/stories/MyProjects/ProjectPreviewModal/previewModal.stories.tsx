import React from 'react';
import { Story, Meta } from '@storybook/react';

import { PreviewModal } from './PreviewModal.js';

export default {
  title: 'My Projects/ProjectPreviewModal',
  component: PreviewModal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template = () => <PreviewModal />;


export const component = Template.bind({});
