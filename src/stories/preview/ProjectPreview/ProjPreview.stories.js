import React from 'react';
import {PreviewStore} from '../PreviewStore.js'
import ProjPreviewimg from './projPreview.png';
import previewShared from './previewShared.png'
import { ProjPreview } from './ProjPreview.js';
import {PreviewSnippet} from './previewSnippet.js'
import {SharedSnippet} from './previewSharedSnippet.js'
import {SharedStore} from './sharedStore.js'
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
  description:"In this component, you can see the preview of the project."+
  "The project title will show at the top and some other links related to the project are"+
  " also shown on the right side top corner where you can view the shared link and exit preview mode."+
  "After this, you will also see the playlist and activities related to that playlist in the list form."+
   "Every playlist is shown in accordion, when you click on accordion then you will be able to see"+
   " activities related to that playlist in the given project.",
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

export const ProjectPreviewShared = Template.bind({});

ProjectPreviewShared.args = {
  componentName:"ProjectPreviewShared",
  path:"/src/containers/Preview/ProjectPreview/ProjectPreviewShared.js",
  description:"In this component, you can see the preview of the shared project."+
   "At the top, you will see the project title and project description."+
  "After this, you will see the playlist and activities related to that playlist in the list form. "+
  "Every playlist is shown in accordion, when you click on accordion then you will be able to see "+
  "activities related to that playlist in the given project.",
  codeSnippet:SharedSnippet,
  libraryUsed:['react-redux','react-bootstrap','react-fontawesome','react-router-dom','prop-types','react-slick'],
  customHooks:[
    {name:'/src/components/ActivityCard/index',url:'www.google.com'},{name:'/src/components/Unauthorized',url:'www.google.com'}
  ],
  reduxStore: [
    {path:'/src/store/actions/project',pathCode:SharedStore}
    
    
  ],
  apiUsed:[

  ],
  //customHooks={['./formik/createOrg','removeActiveAdminForm']}
  images:previewShared,
  stylesheetUsed: PreviewStyle,
  examples:"https://dev.currikistudio.org/project/56/shared"
};
 

