import React from 'react';
import { Tabview } from '../../../component/Tabview'
import {IndexSnippet} from './code.js'
import ProjView from './TeamProjView.png';
import {IndexStore} from '../indexStore.js'
import {IndexStyle}  from './stylesheetUsed.js';
export const Index = () => {
   return (
     <>
    <Tabview
    componentName="Index"
    path="\src\containers\Teams\TeamProjectView\index.js"
    description="This component is used to show all projects related to one team. 
    In the top right corner, there is a button to add a new project to the team. 
    There is also a custom component, which will show project details like project name,
     thumbnail, small description, and team member name at the end.
    A dropdown menu is also attached to every card, through which we can quickly perform
     any function on the project. In the dropdown menu, we can preview the project,
      add members, remove the project, etc."
    codeSnippet={IndexSnippet}
    libraryUsed={['prop-types','react-redux','swal','react-fontawesome','react-router-dom','react-bootstrap']}
    customHooks={[
      {name:'/src/utils/index',url:'www.google.com'}
     
    ]}
    //customHooks={['./formik/createOrg','removeActiveAdminForm']}
    reduxStore= {[
      {path:'/src/store/actions/team',pathCode:IndexStore}
    ]}
    apiUsed= {[
      
    ]}
    images={ProjView}

    stylesheetUsed= {IndexStyle}
    examples="https://dev.currikistudio.org/org/currikistudio/teams/88/projects"

    
    />
    
    </>
  );
};
