import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Footer } from './footer.js';

export default {
  title: 'Footer/Index',
  component: Footer,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template = () => <Footer />;


export const component = Template.bind({});
