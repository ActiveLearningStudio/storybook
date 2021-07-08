import React from 'react';
import { Story, Meta } from '@storybook/react';

import { OrgServices } from './orgServices.js';

export default {
  title: 'Services/OrganizationServices',
  component: OrgServices,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template = () => <OrgServices />;


export const component = Template.bind({});
