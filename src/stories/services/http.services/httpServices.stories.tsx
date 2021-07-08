import React from 'react';
import { Story, Meta } from '@storybook/react';

import { HttpServices } from './httpServices';

export default {
  title: 'Services/HttpServices',
  component: HttpServices,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template = () => <HttpServices />;


export const component = Template.bind({});
