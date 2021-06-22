import React from 'react';

import { Story, Meta } from '@storybook/react';
import {CardSnippet} from './cardSnippet.js'
import card from './card.png';
import Dropdown from './dropdown.png';
import {ProjectStore} from '../projectStore.js'
import { ProjCard } from './ProjCard.js';
import {DropdownSnippet} from './dropdownSnippet.js'
import { Stylesheet } from './stylesheet';
export default {
  title: 'My projects/ProjectCard',
  component: ProjCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} 

const Template = (args) => <ProjCard { ... args} />;


export const index = Template.bind({});

index.args = {
  componentName:"ProjectCard",
  path:"/src/containers/Projects/ProjectCard/index.js",
  description:" Description of Component",
  codeSnippet:CardSnippet,
  libraryUsed:['react-bootstrap', 'react-redux','react-fontawesome','react-router-dom','prop-types','Swal'],
  customHooks:[
    {name:'/src/components/SharePreviewPopup/index',url:'www.google.com'},{name:'/src/containers/Projects/ProjectCard/ProjectCardDropdown',url:'www.google.com'},
      {name:'/src/containers/Projects/ProjectPreviewModal/index',url:'www.google.com'}
  ],
  reduxStore: [
    {path:'store/actions/project',pathCode:ProjectStore}
    
    
  ],
  apiUsed:[

  ],
  //customHooks={['./formik/createOrg','removeActiveAdminForm']}
  images:card,
  stylesheetUsed: Stylesheet,
  examples:"https://dev.currikistudio.org/org/currikistudio"
};
 

export const ProjectCardDropdown = Template.bind({});

ProjectCardDropdown.args = {
  componentName:"ProjectCardDropdown",
  path:"/src/containers/Projects/ProjectCard/ProjectCardDropdown.js",
  description:" Description of Component",
  codeSnippet:DropdownSnippet,
  libraryUsed:['react-bootstrap', 'react-redux','react-fontawesome','react-router-dom','prop-types','Swal'],
  customHooks:[
    {name:'/src/components/SharePreviewPopup/index',url:'www.google.com'}
  ],
  reduxStore: [
    {path:'store/actions/project',pathCode:ProjectStore}
    
    
  ],
  apiUsed:[

  ],
  //customHooks={['./formik/createOrg','removeActiveAdminForm']}
  images:Dropdown,
  stylesheetUsed: Stylesheet,
  examples:"https://dev.currikistudio.org/org/currikistudio"
};
 
