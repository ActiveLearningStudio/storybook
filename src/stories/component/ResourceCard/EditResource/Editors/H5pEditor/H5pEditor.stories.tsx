import React from 'react';
import { Story, Meta } from '@storybook/react';

import { H5PEditor } from './H5pEditor.js';

export default {
  title: 'Component/ResourceCard/EditResource/Editors/H5PEditor',
  component: H5PEditor,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template = () => <H5PEditor/>;


export const component = Template.bind({});
