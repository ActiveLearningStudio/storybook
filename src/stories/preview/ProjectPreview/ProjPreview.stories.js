import React from 'react';
import {PreviewStore} from '../PreviewStore.js'
import ProjPreviewimg from './projPreview.png';
import { ProjPreview } from './ProjPreview.js';
import {PreviewSnippet} from './previewSnippet.js'
import { PreviewStyle } from '../stylesheet';
export default {
  title: 'Preview/ProjectPreview',
  component: ProjPreview,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} 

const Template = (args) => <ProjPreview { ... args} />;


export const index = Template.bind({});

index.args = {
  componentName:"Index",
  path:"/src/containers/Preview/ProjectPreview/index.js",
  description:" Description of Component",
  codeSnippet:PreviewSnippet,
  libraryUsed:['react-redux','react-fontawesome','react-router-dom','prop-types','Swal','react-slick'],
  customHooks:[
    {name:'/src/components/DeletePopup/index',url:'www.google.com'},{name:'/src/components/models/GoogleLoginModal',url:'www.google.com'},
      {name:'/src/components/ActivityCard/index',url:'www.google.com'},   {name:'/src/components/SharePreviewPopup/index',url:'www.google.com'}
      
  ],
  reduxStore: [
    {path:'/src/store/actions/ui',pathCode:PreviewStore}
    
    
  ],
  apiUsed:[

  ],
  //customHooks={['./formik/createOrg','removeActiveAdminForm']}
  images:ProjPreviewimg,
  stylesheetUsed: PreviewStyle,
  examples:"https://dev.currikistudio.org/org/currikistudio/project/5939/preview"
};
 

