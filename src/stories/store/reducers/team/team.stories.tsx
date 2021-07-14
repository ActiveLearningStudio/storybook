import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Team } from './team.js';

export default {
  title: 'Store/Reducers/Team',
  component: Team,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template = () => <Team />;


export const component = Template.bind({});
