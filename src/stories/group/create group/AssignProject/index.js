import React from 'react';
import { Tabview } from '../../../../component/Tabview'
import {IndexSnippet} from './code.js'
import AssignProject from './AssignProjects.png';
import {IndexStyle}  from './stylesheetUsed.js';
export const Index = () => {
   return (
     <>
    <Tabview
    componentName="Index"
    path="\src\containers\Groups\components\AssignProjects\index.js"
    description="This is the Description of Compoennt"
    codeSnippet={IndexSnippet}
    libraryUsed={['prop-types','react-fontawesome']}
    customHooks={[
      {name:'/src/utils/index',url:'www.google.com'}
    ]}
    reduxStore= {[
    ]}
    apiUsed= {[
      
    ]}
    images={AssignProject}

    stylesheetUsed= {IndexStyle}
    examples="https://dev.currikistudio.org/org/currikistudio/groups/create-group"

    
    />
    
    </>
  );
};
