import React from 'react';
import { Tabview } from '../../../component/Tabview'
import {IndexSnippet} from './code.js'
import GroupProjView from './GroupprojectView.png';
import {GroupStore} from '../groupStore.js'
import {IndexStyle}  from './stylesheetUsed.js';
export const Index = () => {
   return (
     <>
    <Tabview
    componentName="Index"
    path="\src\containers\Groups\GroupProjectView\index.js"
    description="This is the Description of Compoennt"
    codeSnippet={IndexSnippet}
    libraryUsed={['prop-types','react-redux','swal','react-fontawesome','react-router-dom','react-bootstrap']}
    customHooks={[
      {name:'/src/utils/index',url:'www.google.com'}
     
    ]}
    //customHooks={['./formik/createOrg','removeActiveAdminForm']}
    reduxStore= {[
      {path:'/src/store/actions/group',pathCode:GroupStore}
    ]}
    apiUsed= {[
      
    ]}
    images={GroupProjView}

    stylesheetUsed= {IndexStyle}
    examples="https://dev.currikistudio.org/org/currikistudio/groups/28/projects"

    
    />
    
    </>
  );
};
