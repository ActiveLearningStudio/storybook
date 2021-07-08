import React from 'react';
import { Story, Meta } from '@storybook/react';

import { GapiServices } from './GapiServices';

export default {
  title: 'Services/GapiServices',
  component: GapiServices,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template = () => <GapiServices />;


export const component = Template.bind({});
