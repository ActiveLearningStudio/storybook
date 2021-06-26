import React from 'react';
import { Tabview } from '../../../component/Tabview'
import {IndexSnippet} from './code.js'
import AddProject from './AddProject.png';
import {GroupStore} from '../groupStore.js'
import {IndexStyle}  from './stylesheetUsed.js';
export const Index = () => {
   return (
     <>
    <Tabview
    componentName="Index"
    path="\src\containers\Groups\AddProjects\index.js"
    description="This is the Description of Compoennt"
    codeSnippet={IndexSnippet}
    libraryUsed={['prop-types','react-redux','react-router-dom','react-fontawesome']}
    customHooks={[
      {name:'/src/containers/Groups/CreateGroup/components/AssignProject/index',url:'www.google.com'}
    ]}
    reduxStore= {[
      {path:'/src/store/actions/group',pathCode:GroupStore}
    ]}
    apiUsed= {[
      
    ]}
    images={AddProject}

    stylesheetUsed= {IndexStyle}
    examples="https://dev.currikistudio.org/org/currikistudio/groups"

    
    />
    
    </>
  );
};
