import React from 'react';
import { Tabview } from '../../../../component/Tabview'
import {IndexSnippet} from './code.js'
import Creation from './CreateGroup.png';
import {IndexStyle}  from './stylesheetUsed.js';
export const Index = () => {
   return (
     <>
    <Tabview
    componentName="Index"
    path="\src\containers\Groups\CreateGroup\components\Creation\index.js"
    description="This is the Description of Compoennt"
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
    examples="https://dev.currikistudio.org/org/currikistudio/groups/create-group"

    
    />
    
    </>
  );
};