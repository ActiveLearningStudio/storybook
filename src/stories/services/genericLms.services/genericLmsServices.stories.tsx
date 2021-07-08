import React from 'react';
import { Story, Meta } from '@storybook/react';

import { GenericLmsServices } from './genericLmsServices';

export default {
  title: 'Services/GenericLmsServices',
  component: GenericLmsServices,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template = () => <GenericLmsServices />;


export const component = Template.bind({});
