import React from 'react';
import { Story, Meta } from '@storybook/react';

import { BodyClass } from './BodyClass.js'

export default {
  title: 'helpers/BodyClass',
  component: BodyClass,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template = () => <BodyClass />;


export const component = Template.bind({});
