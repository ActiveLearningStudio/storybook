import React from 'react';
import { Story, Meta } from '@storybook/react';

import { ProfilePage } from './profilePage.js';

export default {
  title: 'Profile/ProfilePage',
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template = () => <ProfilePage />;


export const component = Template.bind({});
