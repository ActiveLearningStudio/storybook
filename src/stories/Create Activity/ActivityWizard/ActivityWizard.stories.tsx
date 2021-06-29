import React from 'react';
import { Story, Meta } from '@storybook/react';

import { ActivityWizard } from './ActivityWizard.js';

export default {
  title: 'Create Activity/ActivityWizard',
  component: ActivityWizard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template = () => <ActivityWizard />;


export const component = Template.bind({});
