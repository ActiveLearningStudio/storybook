import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Index } from './Index.js';

export default {
  title: 'Component/TextAreaField',
  component: Index,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template = () => <Index/>;


 const component = Template.bind({});
