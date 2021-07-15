import React from 'react';
import { Story, Meta } from '@storybook/react';

import { LtiPlaylistShared } from './LtiPlaylistShared'

export default {
  title: 'Preview/PlaylistPreview/LtiPlaylistPreviewShared',
  component: LtiPlaylistShared,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template = () => <LtiPlaylistShared />;


export const component = Template.bind({});
