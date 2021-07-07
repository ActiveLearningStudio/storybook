import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Pexels } from './pexels.js';

export default {
  title: 'Component/Modals/Pexels',
  component: Pexels,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template = () => <Pexels/>;


export const component = Template.bind({});
