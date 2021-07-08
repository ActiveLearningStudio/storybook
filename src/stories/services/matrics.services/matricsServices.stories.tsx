import React from 'react';
import { Story, Meta } from '@storybook/react';

import { MatricServices } from './matricsServices';

export default {
  title: 'Services/MatricServices',
  component: MatricServices,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template = () => <MatricServices />;


export const component = Template.bind({});
