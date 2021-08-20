import React from 'react';
import { Tabview } from '../../../../component/Tabview'
import {IndexSnippet} from './code.js'
import Creation from './creation.png';
import {IndexStyle}  from './stylesheetUsed.js';
export const Index = () => {
   return (
     <>
    <Tabview
    componentName="Index"
    path="\src\containers\Teams\components\Creation\index.js"
    description="In this component, you will see a form to create your team. 
    In this form, you will enter the team name and team description. You will write
     a small description for the team and then click on the continue button. In this way,
      you will complete the first part for the creation of the team and will move to the next one."
    codeSnippet={IndexSnippet}
    libraryUsed={['prop-types','react-redux','redux-form',]}
    customHooks={[
      {name:'/src/utils/index',url:'www.google.com'},
      {name:'/src/components/InputField/index',url:'www.google.com'},
      {name:'/src/components/TextareaField/index',url:'www.google.com'}
    ]}
    reduxStore= {[
    ]}
    apiUsed= {[
      
    ]}
    images={Creation}

    stylesheetUsed= {IndexStyle}
    examples="https://dev.currikistudio.org/org/currikistudio/teams/create-team"

    
    />
    
    </>
  );
};
