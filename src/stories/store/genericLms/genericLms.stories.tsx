import React from 'react';
import { Story, Meta } from '@storybook/react';

import { GenericLms } from './genericLms';

export default {
  title: 'Store/GenericLMSActionTypes',
  component: GenericLms,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template = () => <GenericLms />;


export const component = Template.bind({});
