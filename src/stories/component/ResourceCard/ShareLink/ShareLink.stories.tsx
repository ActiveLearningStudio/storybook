import React from 'react';
import { Story, Meta } from '@storybook/react';

import { ShareLink } from './ShareLink';

export default {
  title: 'Component/ResourceCard/ShareLink',
  component: ShareLink,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template = () => <ShareLink/>;


export const component = Template.bind({});
