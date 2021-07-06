import React from 'react';
import { Story, Meta } from '@storybook/react';

import { MetaSubjectField } from './MetaSubjectField.js';

export default {
  title: 'Component/ResourceCard/Field/MetaSubjectField',
  component: MetaSubjectField,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template = () => <MetaSubjectField/>;


export const component = Template.bind({});
