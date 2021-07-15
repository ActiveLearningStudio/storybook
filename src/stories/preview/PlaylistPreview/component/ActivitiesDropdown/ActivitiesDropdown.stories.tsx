import React from 'react';
import { Story, Meta } from '@storybook/react';

import { ActivitiesDropdown } from './ActivitiesDropdown.js'

export default {
  title: 'Preview/PlaylistPreview/Component/ActivitiesDropdown',
  component: ActivitiesDropdown,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template = () => <ActivitiesDropdown />;


export const component = Template.bind({});
