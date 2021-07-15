import React from 'react';
import { Story, Meta } from '@storybook/react';

import { ActionTypes } from './actionTypes';

export default {
  title: 'Store/ActionTypes',
  component: ActionTypes,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template = () => <ActionTypes />;


export const component = Template.bind({});
