import React from 'react';
import { Story, Meta } from '@storybook/react';

import { TinyEditor } from './TinyEditor.js';

export default {
  title: 'Component/ResourceCard/AddResource/Editors/TinyEditor',
  component: TinyEditor,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template = () => <TinyEditor/>;


export const component = Template.bind({});
