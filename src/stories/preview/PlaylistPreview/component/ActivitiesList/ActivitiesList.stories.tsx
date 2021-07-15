import React from 'react';
import { Story, Meta } from '@storybook/react';

import { ActivitiesList } from './ActivitiesList.js'

export default {
  title: 'Preview/PlaylistPreview/Component/ActivitiesList',
  component: ActivitiesList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template = () => <ActivitiesList />;


export const component = Template.bind({});
