import React from 'react';
import { Story, Meta } from '@storybook/react';

import { MetaTitleField } from './MetaTitleField.js';

export default {
  title: 'Component/ResourceCard/Field/MetaTitleInputField',
  component: MetaTitleField,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template = () => <MetaTitleField/>;


export const component = Template.bind({});
