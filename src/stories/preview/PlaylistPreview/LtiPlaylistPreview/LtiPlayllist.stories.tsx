import React from 'react';
import { Story, Meta } from '@storybook/react';

import { LtiPlaylist } from './LtiPlaylist'

export default {
  title: 'Preview/PlaylistPreview/LtiPlaylistPreview',
  component: LtiPlaylist,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template = () => <LtiPlaylist />;


export const component = Template.bind({});
