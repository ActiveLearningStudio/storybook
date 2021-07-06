import React from 'react';
import { Story, Meta } from '@storybook/react';

import { MetaEducationLevel } from './MetaEducationLevel.js';

export default {
  title: 'Component/ResourceCard/Field/MetaEducationLevelInputField',
  component: MetaEducationLevel,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template = () => <MetaEducationLevel/>;


export const component = Template.bind({});
