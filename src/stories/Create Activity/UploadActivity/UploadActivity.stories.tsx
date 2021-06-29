import React from 'react';
import { Story, Meta } from '@storybook/react';

import { UploadActivity } from './UploadActivity.js';

export default {
  title: 'Create Activity/UploadActivity',
  component: UploadActivity,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template = () => <UploadActivity />;


export const component = Template.bind({});
