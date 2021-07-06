import React from 'react';
import { Story, Meta } from '@storybook/react';

import { ShareResource } from './ShareResource';

export default {
  title: 'Component/ResourceCard/ShareResource',
  component: ShareResource,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template = () => <ShareResource/>;


export const component = Template.bind({});
