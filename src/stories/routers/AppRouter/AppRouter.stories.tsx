import React from 'react';
import { Story, Meta } from '@storybook/react';

import { AppRouter } from './AppRouter.js';

export default {
  title: 'Routers/AppRouter',
  component: AppRouter,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template = () => <AppRouter />;


export const component = Template.bind({});
