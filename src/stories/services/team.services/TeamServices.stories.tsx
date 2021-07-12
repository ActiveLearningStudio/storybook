import React from 'react';
import { Story, Meta } from '@storybook/react';

import { TeamServices } from './TeamServices.js';

export default {
  title: 'Services/TeamServices',
  component: TeamServices,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template = () => <TeamServices />;


export const component = Template.bind({});
