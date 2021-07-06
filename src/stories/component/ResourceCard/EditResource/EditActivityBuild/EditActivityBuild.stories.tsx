import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Activitybuild } from './EditActivityBuild';

export default {
  title: 'Component/ResourceCard/EditResource/ResourceActivityBuild',
  component: Activitybuild,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template = () => <Activitybuild/>;


export const component = Template.bind({});
