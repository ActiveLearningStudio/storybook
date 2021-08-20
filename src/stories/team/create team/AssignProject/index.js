import React from 'react';
import { Tabview } from '../../../../component/Tabview'
import {IndexSnippet} from './code.js'
import AssignProject from './assignProject.png';
import {IndexStyle}  from './stylesheetUsed.js';
export const Index = () => {
   return (
     <>
    <Tabview
    componentName="Index"
    path="\src\containers\Teams\components\AssignProjects\index.js"
    description="In this component, you can add a project to your team during the creation 
    of a team. You will see a list of the project from where you can easily choose your project
     and add it to your team. After selecting multiple projects,
     you can click on the finish button to complete your process of creation of the team."
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
    examples="https://dev.currikistudio.org/org/currikistudio/teams/create-team"

    
    />
    
    </>
  );
};
