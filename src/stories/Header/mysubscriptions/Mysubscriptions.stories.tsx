import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Mysubscriptions } from './mysubscriptions';

export default {
  title: 'Header/Mysubscriptions',
  component: Mysubscriptions,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template = () => <Mysubscriptions  />;


export const component = Template.bind({});
